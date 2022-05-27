import "../css/club.css"
import Nav from "./Nav"
import Footer from "./Footer";
const Club = () => {

    return (
        <>
            <Nav />
            <div className="body">
                <section className="club">
                    <h1>Le Club</h1>
                </section>
                <section className="presentation">
                    <div className="container">
                        <div className="item-grid d-flex">
                            <h1 className="title">Présentation</h1>
                            <p>Lorem ipsum dolor sit amet,g nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit</p>
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
                                <p>Lorem ipsum dolor sit amet,um ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit </p>
                                <a href='#aaa'>En savoir plus</a>
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
                                <p>Lorem ipsum dolor sit amet,s elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit </p>
                                <a href='#aaa'>En savoir plus</a>
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
                                <p>Lorem ipsum dolor sortor,  dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit </p>
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