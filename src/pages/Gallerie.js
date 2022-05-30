import "../css/Gallerie.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Gallerie = () => {

    return (
        <>
            <Nav />
            <div className="body">
          <h1>presentation de la Famille.. </h1>
            <img src='images/Homme.png' alt='photo de kayak' />
            <img src='images/lesputes.jpeg' alt='photo de kayak' />
            <img src='images/salope.jpeg' alt='photo de kayak' />
            <img src='images/images.jpeg' alt='photo de kayak' />
            <img src='images/chienne.jpeg' alt='photo de kayak' />
            <img src='images/thibault.jpg' alt='photo de kayak' />
            <img src='images/Homme.png' alt='photo de kayak' />
            <img src='images/femme.png' alt='photo de kayak' />
            <img src='images/Homme.png' alt='photo de kayak' />
            </div>
            <Footer />
        </>
    );



};

export default Gallerie;