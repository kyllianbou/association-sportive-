import "../css/club.css"
import Nav from "./Nav"
import Footer from "./Footer";
import React from 'react';
const Club = () => {

    return (
        <>
            <Nav />
            <div className="body">
                <section className="club">
                    <h1>ASSOCIATION</h1>
                </section>
                <section className="presentation">
                    <div className="container">
                        <div className="item-grid d-flex">
                            <h1 className="title">Présentation</h1>
                            <p>Le Canoë Kayak Club des Glissoires (CKCG) est un club sportif avec une très large ouverture de public et de pratiques.
                            Un club complet qui couvre plusieurs activités liés au sports de pagaies comme des sorties en Rivière, en Mer, en Descente ou encore le Kayak Polo en compétition.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="ecole">
                    <div className="container">
                        <div className="item-grid">
                            <div className="grid__item">
                                <img src="./images/kaya-img.png" alt='kayak'></img>
                            </div>
                            <div className="grid__item d-flex">
                                <h2>ECOLE DE PAGAIE</h2>
                                <p>Apprendre une activité, c’est aussi construire son savoir en échangeant avec les autres. L'apprentissage portant sur le canoë et le Kayak se déroule en plusieurs étapes et fini bien souvent avec un test qui permet de voir l'évolution des progrès parcourut pour chaque éléve avec les pagaies couleurs. Notre méthodologie d'apprentissage consiste à apprendre avec ses camarades mais pas que, evidemment un encadreur specialiser et assermenter les aides a se dépasser au travers de plusieurs activités visant toujours à s'amélorer.</p>
                                <a href='/Ecole'>En savoir plus</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="Kayak">
                    <div className="container">
                        <div className="item-grid">
                            <div className="grid__item left">
                                <img src="./images/kaya-img.png" alt="kayak"></img>
                            </div>
                            <div className="grid__item d-flex right">
                                <h2>Kayak polo</h2>
                                <p>Au carrefour du basket, du water polo et du football américain, le Kayak-Polo offre un cocktail assurément spectaculaire. Une surface de jeu de 35 m x 20, équipée de 2 buts surélevés de 1,50 m par 1 m, deux équipes de 5 joueurs se disputent un ballon à la main où à l'aide de la pagaie. Le Kayak-Polo comprend des compétitions régionales, nationales (championnat de France scindé en plusieurs divisions) et internationales (championnats d'Europe et du Monde). </p>
                                <a href='/Kayak'>En savoir plus</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service">
                    <div className="container">
                        <div className="item-grid">
                            <div className="grid__item">
                                <img src="./images/kaya-img.png" alt='kayak'></img>
                            </div>
                            <div className="grid__item d-flex">
                                <h2>SERVICES</h2>
                                <p>Plusieurs autres services sont mis à votre disposition comme la location de bateaux, de step up paddle, etc... Par ailleurs nous proposons aussi des prestations pour des centres, sortie scolaire ou autres (à partir de 20 personnes).</p>
                                <a href='#aaa'>En savoir plus</a>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );



};

export default Club;