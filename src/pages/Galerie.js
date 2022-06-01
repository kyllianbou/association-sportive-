import React from 'react';
import "../css/Galerie.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Galerie = () => {
    function setImageVisible(

    ) {
        var img = document.getElementById('thibault');
     img.style.visibility = 'visible';
    }
    return (
        <>
            <div className='head'>
            <Nav />
          <h1 className='titre-galerie'>GALERIE</h1>
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
            <button onClick={setImageVisible}>c'est moi Thibault</button>
            <img  id='thibault' src='images/thibault_leboss.jpg' alt='photo de thibault'/>
            </div>
            <Footer />
        </>
    );



};

export default Galerie;