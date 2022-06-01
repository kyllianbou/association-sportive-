// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut,updateProfile} from "firebase/auth"
import { useEffect,useState } from "react";

import {getFirestore} from 'firebase/firestore';
import { async } from "@firebase/util";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_6v7_7eghJrZbfHYy-XUKcHKIZ6XaQsA",
  authDomain: "kyak-polo.firebaseapp.com",
  projectId: "kyak-polo",
  storageBucket: "kyak-polo.appspot.com",
  messagingSenderId: "360441140823",
  appId: "1:360441140823:web:99de66299d6a0ebbd03512",
  measurementId: "G-8NQLQN43E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const bd = getFirestore(app);
// const analytics = getAnalytics(app);



export function signup(email, password,nom, prenom) {
    console.log(nom)
   return createUserWithEmailAndPassword(auth,email,password)
   .then((userCredentials)=>{
    if(userCredentials.user){
      updateProfile(userCredentials.user,{
        displayName: nom+" "+prenom,
      })
    }
    })
   //    .then(async(res) =>{
//        console.log(res.user)
//        const user = res.user;
//        await updateProfile(user, {
//            displayName: nom,
           
//        });
//        console.log(auth)
//    })
   .catch((err) =>{
       console.log(err)
   });
};

//custom hook

export function useAuth(){
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
      const unsub=  onAuthStateChanged(auth,user =>  setCurrentUser(user));
      return unsub;
    },[])
    return currentUser;
}

export function logout(){
    return signOut(auth);
}

export function login(email, password){
    
   return signInWithEmailAndPassword(auth,email,password)

}