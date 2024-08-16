  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCLY8NDLHShcQzAaq-Rbuv49eh-JawhwKc",
    authDomain: "task-b0725.firebaseapp.com",
    projectId: "task-b0725",
    storageBucket: "task-b0725.appspot.com",
    messagingSenderId: "737539588082",
    appId: "1:737539588082:web:c78abdd6f645ffdc45356b",
    measurementId: "G-CN8417YBE1"
  };

 export const app = initializeApp(firebaseConfig);
  export  const auth = getAuth(app);
 export const db = getFirestore(app);