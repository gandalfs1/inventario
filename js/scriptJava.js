const firebaseConfig = {
  apiKey: "AIzaSyBD-kmtHZxoRt3Icm_u46e9158xOUkgKn0",
  authDomain: "inventario-b6fb4.firebaseapp.com",
  projectId: "inventario-b6fb4",
  storageBucket: "inventario-b6fb4.appspot.com",
  messagingSenderId: "24900038826",
  appId: "1:24900038826:web:99def3cc94c3b4da7e20d3"
};


const openModal = document.getElementById('openRegisterModal')
const modal = document.getElementById('modal')
const closerModal = document.getElementById('closeRegisterModal')
const registerForm = document.getElementById('register-form')
firebase.initializeApp(firebaseConfig)
const productRef = firebase.database().ref('products');
const db = firebase.firestore();
const showRegisterModal = () => {
  modal.classList.toggle('is-active')
}

openModal.addEventListener('click', showRegisterModal)
closerModal.addEventListener('click', showRegisterModal)

registerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const codigo = registerForm['codigo'].value
  const precioUnitario = registerForm['precioUnitario'].value
  const cantidad = registerForm['cantidad'].value
  const precioTotal = registerForm['precioTotal'].value
  const detalle = registerForm['detalle'].value

  const registerProduct = productRef.push()
  registerProduct.set({
    Uid: registerProduct.toString().substring(firebase.database().ref().toString().length-1),
    Codigo: codigo,
    PrecioUnitario: precioUnitario,
    Cantidad: cantidad,
    PrecioTotal: precioTotal,
    Detalle: detalle
  })
  showRegisterModal()
})
