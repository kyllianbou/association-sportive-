import React from 'react';
import '../css/slide.css';
import '../css/all.css';

export const Slide = () => {

    function ActiveClick(e) {
        let active = document.getElementsByClassName('active');
        let liste = document.getElementsByClassName('number');

        active[0].classList.remove('active');
        e.target.classList.add('active');
    }

    return (
        <div className="slide_carrousel">
            <div className="slide_container">
                <ul className="numbers">
                    <li>
                        <a className='number one active' href="#asso" onClick={ActiveClick}>1</a>
                    </li>
                    <li>
                        <a className='number two' href="#services" onClick={ActiveClick}>2</a>
                    </li>
                    <li>
                        <a className='number three' href="#contact" onClick={ActiveClick}>3</a>
                    </li>
                </ul>
                <div className="slide active" id="asso">
                    <h1>L'association</h1>
                </div>
                <div className="slide" id="services">
                    <h1>Nos services</h1>
                </div>
                <div className="slide" id="contact">
                    <h1>Nous contacter</h1>
                </div>
            </div>
        </div>
    )
}