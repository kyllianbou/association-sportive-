import React from "react";

const CardsP = ({ prestation }) => {

    let Default;

    function Hover(e) {
        Default = e.target.innerHTML;
        e.target.innerHTML = "Ajouter au panier";
    }

    function HoverLeave(e) {
        e.target.innerHTML = Default;
    }


    return (
        <li className="card">
            <img src={prestation.image} alt={"aperçu " + prestation.nom} />
            <div className="infos">
                <h3>{prestation.nom}</h3>
                <button className='btn_prix' onMouseEnter={Hover} onMouseLeave={HoverLeave}>{prestation.prix + " €"}</button>
            </div>
        </li>
    )
}

export default CardsP;