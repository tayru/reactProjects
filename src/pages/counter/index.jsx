import './index.scss';
import React from 'react'
export function CounterPage() {
   const [count, setCount] = React.useState(0);
   const  onClickPlus = () => {
         setCount(count + 1)
     };
    const  onClickMinus = () => {
        setCount(count - 1)
    };

    return(
    <div className="Counter">
            <h2>Счетчик:</h2>
            <h1>{count}</h1>
            <button onClick={onClickMinus} className="minus">- Минус</button>
            <button onClick={onClickPlus} className="plus">Плюс +</button>
    </div>
)}
