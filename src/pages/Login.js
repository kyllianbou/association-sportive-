import React from 'react';
import Nav from '../components/Nav';
import '../css/nav.css';
import '../css/login.css';


const Login = () => {
    return (
        <div>
            <Nav />
          <div className="box">
              <article>
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
          </div>
        </div>
    );
};

export default Login;