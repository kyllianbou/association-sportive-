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
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-tiktok"></i>
                  </div>
              </article>
              <span className="trait"></span>
              <article>
                  <h2>INSCRIPTION</h2>
                  <input type="text" placeholder='Nom' />
                  <input type="text" placeholder='Prénom' />
                  <input type="password" placeholder='adresse@mail.com' />
                  <input type="password" placeholder='Mot de passe' />
                  <input type="password" placeholder='Confirmer Mot de passe' />
                 <label htmlFor="checkbox">J'accepte les conditions d'utilisations</label>
                 <input type="checkbox" className='check-me'/>
                  <button>Inscription</button>
                  <div className="resaux-sociaux insc">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-tiktok"></i>
                  </div>
              </article>
          </div>
        </div>
    );
};

export default Login;