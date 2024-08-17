import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { db } from "./config.js";

function rendercard() {
    ol.innerHTML=``
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML+=`<li>${arr[i]}
        <div class="card glass w-96">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="car!" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
        </li>`
        
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
          input : input.value
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
})