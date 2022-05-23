import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css';
const Nav = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () =>{
    if(window.scrollY >= 500){
        setNavbar(true);
    } else {
        setNavbar(false);
    }
    };

    window.addEventListener('scroll', changeBackground);

  
    return (
        <nav className={navbar ? 'navbar active' : 'navbar'}>
        <NavLink to="/about" className='brand'>ckcg avion</NavLink>
            <ul className='nav-links'>
                <li><NavLink to="/Home" className='link-item'>accueil</NavLink></li>
                <li><NavLink to="/Association" className='link-item'>association</NavLink></li>
                <li><NavLink to="/Services" className='link-item'>services</NavLink></li>
                <li><NavLink to="/Gallerie" className='link-item'>gallerie</NavLink></li>
                <li><NavLink to="/Contact" className='link-item'>contact</NavLink></li>
            </ul>     
        <NavLink to="/about" className='connexion'>Connexion/Inscription</NavLink>
        </nav> 
    );
};

export default Nav;