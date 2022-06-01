import React from 'react';
import Nav from '../components/Nav';
import '../css/login.css';
import {signup,login,logout, useAuth} from "../firebase"
import {useRef,useState} from "react"
import { async } from '@firebase/util';


const Login = () => {
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();
    const nom = useRef();
    const prenom = useRef();


    async function handleSignup() {
        setLoading(true);
        try{
        await signup(emailRef.current.value,passwordRef.current.value,nom.current.value,prenom.current.value);
        }catch(error){
            alert(error)
        }
        setLoading(false);
    }

    async function handleLogOut() {
        setLoading(true);
       try {
           await logout();
           
       } catch{
           alert("error");
       }
       setLoading(false);
    }

     function handleLogin(){
        setLoading(true);
        try{
         login(emailRef.current.value,passwordRef.current.value);
        }catch{
            alert("error")
        }
        setLoading(false);
    }


    return (
        <div className='login'>
            <Nav />
          <div className="box">
              <div>{currentUser?.displayName}</div>
              <article>
              <h2>CONNEXION</h2>
                  <input type="email" placeholder='adresse@mail.com' />
                  <input type="password" placeholder='Mot de passe' />
                  <button onClick={handleLogin}>Connexion</button>
                  <button  onClick={handleLogOut} >Deco</button>
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
                  <input ref={nom} type="text" placeholder='Nom' />
                  <input ref={prenom} type="text" placeholder='Prénom' />
                  <input ref={emailRef} type="email" placeholder='adresse@mail.com' />
                  <input ref={passwordRef} type="password" placeholder='Mot de passe' />
                  <input type="password" placeholder='Confirmer Mot de passe' />
                 <label htmlFor="checkbox">J'accepte <a href='#test'>les conditions d'utilisations</a> </label>
                 <input type="checkbox" className='check-me'/>
                  <button  onClick={handleSignup}>Inscription</button>
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

// disabled={ loading || currentUser}
export default Login;