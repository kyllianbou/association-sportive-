import React from 'react';
import '../css/contact.css';
import  {AiFillPhone,AiFillMail }  from  'react-icons/fa'  ; 

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
        <div className='contact' >
        <input type="text" placeholder="prenom" />
        <input type="text" placeholder="nom" />
        <input type="email" id="email" name="email" autocomplete="email" aria-required="true" aria-invalid="true" placeholder="exemple.mul@internet.fr" />
        <input type="tel" placeholder="tel:" pattern="[0-9]{10}"/>
        <input type="text" placeholder="commentez!!" className='commentaire' />
        <input type="submit" value="envoyer"/>
        </div>
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
        {/* < AiFillPhone/> */}
        <p>0658690678</p>
       {/* < AiFillMail /> */}
        <p>benbahlouli.nahim@gmail.com</p>
        </section>
      </article></>
  );
}



export default contact