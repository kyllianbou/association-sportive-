import React from 'react';
import Nav from '../components/Nav';
import '../css/login.css';


const Login = () => {
    return (
        <div className='login'>
            <Nav />
          <div className="box">
              <article>
              <h2>CONNEXION</h2>
                  <input type="email" placeholder='adresse@mail.com' />
                  <input type="password" placeholder='Mot de passe' />
                  <button>Connexion</button>
                  <div className="resaux-sociaux">
                  <a href='https://facebook.com'><i className="fa-brands fa-facebook-f"></i></a>
                  <a href='https://twitter.com'><i className="fa-brands fa-twitter"></i></a>
                  <a href='https://instagram.com'><i className="fa-brands fa-instagram"></i></a>
                  <a href='https://tiktok.com'><i className="fa-brands fa-tiktok"></i></a>
                  </div>
              </article>
              <span className="trait"></span>
              <article>
                  <h2>INSCRIPTION</h2>
                  <input type="text" placeholder='Nom' />
                  <input type="text" placeholder='Prénom' />
                  <input type="email" placeholder='adresse@mail.com' />
                  <input type="password" placeholder='Mot de passe' />
                  <input type="password" placeholder='Confirmer Mot de passe' />
                 <label htmlFor="checkbox">J'accepte <a href='#test'>les conditions d'utilisations</a> </label>
                 <input type="checkbox" className='check-me'/>
                  <button>Inscription</button>
                  <div className="resaux-sociaux insc">
                  <a href='https://fr-fr.facebook.com/'><i className="fa-brands fa-facebook-f"></i></a>
                  <a href='https://twitter.com/?lang=fr'><i className="fa-brands fa-twitter"></i></a>
                  <a href='https://www.instagram.com/?hl=fr'><i className="fa-brands fa-instagram"></i></a>
                  <a href='https://www.tiktok.com/fr/'><i className="fa-brands fa-tiktok"></i></a>
                  </div>
              </article>
          </div>
          
        </div>
    );
};

export default Login;