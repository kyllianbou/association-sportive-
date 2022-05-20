import React from 'react';
import '../css/slide.css';

export const Slide = () => {
    return (
        <div className="slide_container">
            <ul className="numbers">
                <li className='number'>1</li>
                <li className='number'>2</li>
                <li className='number'>3</li>
            </ul>
            <div className="slide" id="asso">
                <h1>L'association</h1>
            </div>
            <div className="slide" id="services">
                <h1>Nos services</h1>
            </div>
            <div className="slide" id="contact">
                <h1>Nous contacter</h1>
            </div>
        </div>
    )
}