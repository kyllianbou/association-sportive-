import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profil from './pages/Profil';
import Services from './pages/Services';
const App = () => {
    return (
        <div>
           <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/Home' element={<Home/>}></Route>
                    <Route path='/Login' element={<Login/>}></Route>
                    <Route path='/Profil' element={<Profil/>}></Route>
                    <Route path='/Services' element={<Services/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;