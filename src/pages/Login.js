import React from 'react';
import Nav from '../components/Nav';
import '../css/nav.css';
import '../css/login.css';


const Login = () => {
    return (
        <div>
            <Nav />
           <div className="inscription">
             <article>
                 <input type="e-mail" placeholder='adresse@mail.com'/>
                 <input type="password" placeholder='Mot de passe'/>
                 <button>Connexion</button>
                 <i class="fa-brands fa-facebook"></i>
                 <i class="fa-brands fa-twitter"></i>
                 <i class="fa-brands fa-instagram"></i>
                 <i class="fa-brands fa-tiktok"></i>
             </article>
             <article>
                 <input type="e-mail" placeholder='adresse@mail.com'/>
                 <input type="password" placeholder='Mot de passe'/>
                 <button>Connexion</button>
                 <i class="fa-brands fa-facebook"></i>
                 <i class="fa-brands fa-twitter"></i>
                 <i class="fa-brands fa-instagram"></i>
                 <i class="fa-brands fa-tiktok"></i>
             </article>
           </div>
        </div>
    );
};

export default Login;