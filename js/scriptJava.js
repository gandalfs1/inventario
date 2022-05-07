  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
  import {  getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBD-kmtHZxoRt3Icm_u46e9158xOUkgKn0",
    authDomain: "inventario-b6fb4.firebaseapp.com",
    projectId: "inventario-b6fb4",
    storageBucket: "inventario-b6fb4.appspot.com",
    messagingSenderId: "24900038826",
    appId: "1:24900038826:web:99def3cc94c3b4da7e20d3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore()

const openModal = document.getElementById('openRegisterModal')
const modal = document.getElementById('modal')
const closerModal = document.getElementById('closeRegisterModal')
const registerForm = document.getElementById('register-form')
//const productRef = firebase.database().ref('products')

const showRegisterModal = () =>{
    modal.classList.toggle('is-active')
}

openModal.addEventListener('click',showRegisterModal)
closerModal.addEventListener('click',showRegisterModal)

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const codigo = registerForm['codigo'].value
    const precioUnitario = registerForm['precioUnitario'].value
    const cantidad = registerForm['cantidad'].value
    const precioTotal = registerForm['precioTotal'].value
    const detalle = registerForm['detalle'].value
    register(codigo, precioUnitario, cantidad, precioTotal, detalle)

})

const register = (codigo, precioUnitario, cantidad, precioTotal, detalle ) => {
    console.log(codigo, precioUnitario, cantidad, precioTotal, detalle)
   // addDoc(collection(db,'products'),{codigo, precioUnitario, cantidad, precioTotal, detalle});
}