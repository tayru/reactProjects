import './index.scss';
import React from 'react'
import { Success } from './Success';
import { Users } from './Users';

export function UsersPage() {
   const [users, setUsers] = React.useState([]);
   const [isLoading, setLoading] = React.useState(true);
   const [searchValue, SetSearchValue] = React.useState('');
   const [invites, setInvites] = React.useState([]);
   const [success, setSuccess] = React.useState(false);

   React.useEffect( () => {
    fetch('https://reqres.in/api/users')
        .then((res) => res.json())
        .then((json) => {
            setUsers(json.data)
       })
        .catch(err => {
           console.warn(err)
    }).finally(() => {
        setTimeout(() => setLoading(false), 1000);

    });
   }, []);

   const onChangeSearchValue = (event) => {
       SetSearchValue(event.target.value)
   };

   const onClickInvite = (id) => {
       if (invites.includes(id)) {
           setInvites(prev => prev.filter(_id => _id !== id))
       } else {
           setInvites(prev => [...prev, id])
       }

   };

   const onClickSendInvites = () => {
       setSuccess(true)
   }


    return(
    <div className="Users">
        {success ? (
            <Success count={invites.length}/>
        ) : (
            <Users items={users}
                   isLoading={isLoading}
                   searchValue={searchValue}
                   onChangeSearchValue={onChangeSearchValue}
                   invites={invites}
                   onClickInvite={onClickInvite}
                   onClickSendInvites={onClickSendInvites}
            />
        )
        }

    </div>
)}
