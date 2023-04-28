import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main';
import { CounterPage } from './pages/counter';
import {ModalPage} from "./pages/modal";
import {QuizPage} from "./pages/quiz";
import {UsersPage} from "./pages/users";
import {DiagramPage} from "./pages/diagram";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='counter' element={<CounterPage />} />
                <Route path='modal' element={<ModalPage />} />
                <Route path='quiz' element={<QuizPage />} />
                <Route path='users' element={<UsersPage />} />
                <Route path='diagram' element={<DiagramPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;