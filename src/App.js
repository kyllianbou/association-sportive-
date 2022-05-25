import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Club from './components/Club';
import Home from './pages/Home';
import Login from './pages/Login';
import Profil from './pages/Profil';
const App = () => {
    return (
        <> 
        <Router>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/Club' element={<Club/>}/>
                    <Route path='/Home' element={<Home/>}></Route>
                    <Route path='/Login' element={<Login/>}></Route>
                    <Route path='/Profil' element={<Profil/>}></Route>
                </Routes>
        </Router>
        </>
    );
};

export default App;