import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./config.js";


const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => { 
        const user = userCredential.user;
        console.log(user);
        window.location="sing-in.html"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    
})