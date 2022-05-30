import React from 'react';
import "../css/Galerie.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Galerie = () => {

    return (
        <>
            <div className='head'>
            <Nav />
          <h1>presentation de la Famille..</h1>
        </div>
            <div className="bod">
            <img src='images/thibault.jpg' alt='photo de kayak' />
            <img src='images/thibault.jpg' alt='photo de kayak' />
            <img src='images/thibault.jpg' alt='photo de kayak' />
            <img src='images/thibault.jpg' alt='photo de kayak' />
            <img src='images/thibault.jpg' alt='photo de kayak' />
            <img src='images/thibault.jpg' alt='photo de kayak' />
            <img src='images/thibault.jpg' alt='photo de kayak' />
            <img src='images/thibault.jpg' alt='photo de kayak' />
            <img src='images/thibault.jpg' alt='photo de kayak' />
            <img src='images/thibault.jpg' alt='photo de kayak' />
            </div>
            <Footer />
        </>
    );



};

export default Galerie;