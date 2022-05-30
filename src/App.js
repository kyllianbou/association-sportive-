import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Slide from './pages/Slide';
import Club from './components/Club';
import Login from './pages/Login';
import Profil from './pages/Profil';
import Galerie from './pages/Galerie';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Ecole from './pages/Ecole';
import Kayak from './pages/Kayak';
import './css/all.css';

const App = () => {
    return (
        <> 
        <Router>
                <Routes>
                    <Route path='/' element={<Slide/>}></Route>
                    <Route path='/Club' element={<Club/>}/>
                    <Route path='/Login' element={<Login/>}></Route>
                    <Route path='/Profil' element={<Profil/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/Ecole' element={<Ecole/>}></Route>
                    <Route path='/Kayak' element={<Kayak/>}></Route>
                    <Route path='/Services' element={<Services/>}></Route>
                    <Route path='/Galerie' element={<Galerie/>}></Route>
                </Routes>
        </Router>
        </>
    );
};

export default App;