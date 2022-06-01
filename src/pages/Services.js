import React from "react";
import '../css/services.css';
import Cards from "../components/Card";
import { Location } from "../components/Location";
import { Prestation } from "../components/Prestation";
import CardsP from "../components/CardP";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Services = () => {
    return (
        <div className="services">
            <Nav />
            <header className="services_header">
                <h1>SERVICES</h1>
            </header>
            <article>
                <section className="services_presentation">
                    <h2>Présentation</h2>
                    <p>Un anniversaire à fêter ? une sortie entre amis ? ou même en famille? Même si vous n'êtes pas inscrit au club, vous allez pouvoir pagayer et vous amuser !</p>
                </section>
                <hr></hr>
                <section className="services_locations">
                    <h2>Nos produits à louer</h2>
                    <article className="liste_container">
                        <ul className='liste_locations'>
                        {Location.map((kayak, index) => (
                        <Cards key={index} kayak={kayak} />
                    ))}
                        </ul>
                    </article>
                </section>
                <hr></hr>
                <section id="services_prestations">
                    <h2>Prestations encadrées</h2>
                    <article id="liste_container">
                        <ul id="liste_locations">
                        {Prestation.map((prestation, index) => (
                        <CardsP key={index} prestation={prestation} />
                    ))}
                        </ul>
                    </article>
                </section>
            </article>
            <Footer />
        </div>
    )
}

export default Services;