import React from 'react';
import '../css/Ecole.css';
import Nav from '../components/Nav'


const Contact = () => {
    return (
        <><div id='headder'>
            <Nav />
            <h1>Ecole de Pagaie</h1>
        </div><article id='toto' >
                <h1>Presentation</h1>
                <div id='texte' >
                <p>Apprendre une activité, c’est aussi construire son savoir en échangeant avec les autres. L'apprentissage portant sur le canoë et le Kayak se déroule en plusieurs étapes et fini bien souvent avec un test qui permet de voir l'évolution des progrès parcourut pour chaque éléve avec les pagaies couleurs. Notre méthodologie d'apprentissage consiste à apprendre avec ses camarades mais pas que, evidemment un encadreur specialiser et assermenter les aides a se dépasser au travers de plusieurs activités visant toujours à s'amélorer</p></div>
                <h1 id='color' >Les Pagaies De Couleurs</h1> </article>
            <div id='ttph' >
                <img src='images/debut.png' alt='photo de pagaie' />
                <img src='images/fin.png' alt='photo de pagaie' />
            </div>
        </>
    );
}
export default Contact