import React from 'react';
import '../css/Kayak.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


const Contact = () => {
    return (
        <><div className='heade'>
            <Nav/>
            <h1>Kayak Polo</h1>
        </div><article id='toto' >
                <h1>C'est quoi?</h1>
                <div id='texte' >
                <p>Au carrefour du basket, du water polo et du football américain, le Kayak-Polo offre un cocktail assurément spectaculaire. Une surface de jeu de 35 m x 20, équipée de 2 buts surélevés de 1,50 m par 1 m, deux équipes de 5 joueurs se disputent un ballon à la main où à l'aide de la pagaie. Le Kayak-Polo comprend des compétitions régionales, nationales (championnat de France scindé en plusieurs divisions) et internationales (championnats d'Europe et du Monde). <br></br><br></br>

Discipline montante, le Kayak-Polo est un véritable sport collectif où les pagayeurs doivent allier compétences techniques, sens tactique et qualités physiologiques. Quand vous débutez, vous avez plutôt tendance à prier pour ne pas recevoir le ballon. En effet, le porteur de celui-ci peut être poussé à l'eau à tout moment par l'adversaire. C'est l'un des aspects les plus spectaculaires de la discipline qui fait des poloïstes les spécialistes de l'esquimautage (une technique permettant de se redresser avec la pagaie sans sortir du bateau). Le Kayak-Polo réunit toutes les particularités d'un sport collectif de haut niveau. La France y tient une place d'honneur et n'a pas fini de se faire remarquer.<br></br><br></br>

Les bateaux de Kayak-Polo sont plus courts pour une plus grande maniabilité. Leurs pointes avant sont rembourrées et arrondies pour éviter les blessures à la suite de chocs. L'arrière plat permet de faire demi-tour en très peu de temps. <br></br><br></br></p></div>
                <h1 id='color' >Equipes Hommes Du Club</h1> 
                <img src='images/Homme.png' alt='photo de kayak' />
            <h1 id='color' >Equipes Femmes Du Club</h1> 
            <img src='images/Femme.png' alt='photo de kayak' /></article>
            <Footer/>
        </>
    );
}
export default Contact