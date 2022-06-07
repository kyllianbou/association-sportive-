import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navp.css';
import { slide as Menu } from 'react-burger-menu';
import { BsFillBasketFill } from 'react-icons/bs';

const Navp = () => {
    const [navbart, setNavbart] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 500) {
            setNavbart(true);
        } else {
            setNavbart(false);
        }
    };

    window.addEventListener('scroll', changeBackground);


    return (
        <>
            <nav className={navbart ? 'navbart active' : 'navbart'}>
                <NavLink to="/" className='brandt'>ckcg avion</NavLink>
                <ul className='navt-links'>
                    <li><NavLink to="/" className='link-itemt'>accueil</NavLink></li>
                    <li><NavLink to="/Club" className='link-itemt'>association</NavLink></li>
                    <li><NavLink to="/Services" className='link-itemt'>services</NavLink></li>
                    <li><NavLink to="/Galerie" className='link-itemt'>galerie</NavLink></li>
                    <li><NavLink to="/Contact" className='link-itemt'>contact</NavLink></li>
                </ul><div className='totot' >
                <a className='paniert'><BsFillBasketFill/></a>
                <span className='avatar' ></span></div>
            </nav>
            <Menu className='burgert'>
                <nav>
                    <NavLink to="/Home" className='brandt'>ckcg avion</NavLink>
                    <ul className='nav-linkst'>
                        <li><NavLink to="/Home" className='link-itemt'>accueil</NavLink></li>
                        <li><NavLink to="/Club" className='link-itemt'>association</NavLink></li>
                        <li><NavLink to="/Services" className='link-itemt'>services</NavLink></li>
                        <li><NavLink to="/Galerie" className='link-itemt'>gallerie</NavLink></li>
                        <li><NavLink to="/Contact" className='link-itemt'>contact</NavLink></li>
                    </ul>
                <a className='paniert' ><BsFillBasketFill/></a>
                </nav>
            </Menu>
        </>
    );
};

export default Navp;