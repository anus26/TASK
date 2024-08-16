import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { db } from "./config.js";

function rendercard() {
    ol.innerHTML=``
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML+=`<li>${arr[i]}</li>`
        
    }
}


const form=document.querySelector('#form');
const input=document.querySelector('#input')
const ol=document.querySelector('ol')
const arr=[]


form.addEventListener('submit',async(event)=>{
    event.preventDefault();
    arr.push(input.value)
    rendercard()
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
})