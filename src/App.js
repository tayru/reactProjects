import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main';
import { CounterPage } from './pages/counter';
import {ModalPage} from "./pages/modal";
import {QuizPage} from "./pages/quiz";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='counter' element={<CounterPage />} />
                <Route path='modal' element={<ModalPage />} />
                <Route path='quiz' element={<QuizPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;