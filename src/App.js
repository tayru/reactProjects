import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main';
import { CounterPage } from './pages/counter';
import {ModalPage} from "./pages/modal";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='counter' element={<CounterPage />} />
                <Route path='modal' element={<ModalPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;