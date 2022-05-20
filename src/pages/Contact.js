import React from 'react';
import '../css/contact.css';

const contact = () => {
  return (
    <><div className='headder'>
      <h1>Contact</h1>
    </div><article className='toto' >
      <section className='art1' >
        <h2>Adresse</h2>
        <p>72 Rue Casimir Beugnet</p>
        <p>62300 Lens</p>
        </section>
        <section className='art2' >
        <h2>Formulaire de contact</h2>
        </section>
        <section className='art3' >
        <h2>Horaires</h2>
        <p>Lundi-Vendredi</p>
        <p>08:00-17:00</p>
        <p>Samedi-Dimanche</p>
        <p>13:00-17:00</p>
        </section>
        <section className='art4' >
        <h2>Contact</h2>
        <p>0656743545</p>
        <p>benbahlouli.nahim@gmail.com</p>
        </section>
      </article></>
  );
}



export default contact