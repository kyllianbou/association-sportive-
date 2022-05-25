import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Slide from './pages/Slide';
import Club from './components/Club';
import Login from './pages/Login';
import Profil from './pages/Profil';
// import Services from './pages/Services';
const App = () => {
    return (
        <> 
        <Router>
                <Routes>
                    <Route path='/' element={<Slide/>}></Route>
                    <Route path='/Club' element={<Club/>}/>
                    <Route path='/Login' element={<Login/>}></Route>
                    <Route path='/Profil' element={<Profil/>}></Route>
                    {/* <Route path='/Services' element={<Services/>}></Route> */}
                </Routes>
        </Router>
        </>
    );
};

export default App;