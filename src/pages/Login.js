import React from 'react';
import Nav from '../components/Nav';
import '../css/nav.css';
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
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-tiktok"></i>
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
                  <button>Connexion</button>
                  <div className="resaux-sociaux insc">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-tiktok"></i>
                  </div>
              </article>
          </div>
        </div>
    );
};

export default Login;