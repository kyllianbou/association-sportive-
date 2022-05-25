import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Club from './components/Club';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
    return (
        <> 
        <Router>
                <Routes>
                  
                    <Route path='/Club' element={<Club/>}/>
                    <Route path='/Home' element={<Home/>}/>
                    <Route path='/Login' element={<Login/>} />
                  
                </Routes>
        </Router>
        </>
    );
};

export default App;