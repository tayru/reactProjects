import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main';
import { CounterPage } from './pages/counter/counter';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='counter' element={<CounterPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;