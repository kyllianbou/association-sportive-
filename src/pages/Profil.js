import React from 'react';
import Nav from '../components/Nav';
import '../css/profil.css';

const Profil = () => {
    return (
        <div className='profil'>
            <Nav/>
            <div className="box-profil">
                <article className='name'>
                    <a href=''><div className="avatar"><img src="../logo192.png" alt="" /></div></a>
                    <h2>Jean-Didier</h2>
                    <h4>année de création : 2 juin 2020</h4>
                    <button className="deconnexion">DECONNEXION</button>
                </article>
                <span className="trait-profil"></span>
                <article className='preference'>
                    <a href=''>Mon panier</a>
                    <a href=''>Pagaies couleurs : Pagaie Noir M/V/C</a>
                    <a href=''>Année de Kayak : 10 ans</a>
                    <a href=''>Article préféré : Stand up paddle</a>
                    <a href=''>plat favoris : Hamburger</a>
                </article>
            </div>
        </div>
    );
};

export default Profil;