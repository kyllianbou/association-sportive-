import React from 'react';
import Nav from '../components/Nav'
import '../css/profil.css';

const Profil = () => {
    return (
        <div className='profil'>
            <Nav/>
            <div className="box-profil">
                <article className='name'>
                    <a href='https://fr-fr.facebook.com/'><div className="avatar"></div></a>
                    <h2>Jean-Didier</h2>
                    <h4>année de création : 2 juin 2020</h4>
                    <button className="deconnexion">DECONNEXION</button>
                </article>
                <span className="trait"></span>
                <article className='preference'>
                    <a href='https://fr-fr.facebook.com/'>Mon panier</a>
                    <a href='https://fr-fr.facebook.com/'>Pagaies couleurs : Pagaie Noir M/V/C</a>
                    <a href='https://fr-fr.facebook.com/'>Année de Kayak : 10 ans</a>
                    <a href='https://fr-fr.facebook.com/'>Article préféré : Stand up paddle</a>
                    <a href='https://fr-fr.facebook.com/'>plat favoris : Hamburger</a>
                </article>
            </div>
        </div>
    );
};

export default Profil;