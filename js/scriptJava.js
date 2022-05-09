const firebaseConfig = {
  apiKey: "AIzaSyBD-kmtHZxoRt3Icm_u46e9158xOUkgKn0",
  authDomain: "inventario-b6fb4.firebaseapp.com",
  projectId: "inventario-b6fb4",
  storageBucket: "inventario-b6fb4.appspot.com",
  messagingSenderId: "24900038826",
  appId: "1:24900038826:web:99def3cc94c3b4da7e20d3"
};

//!modal register
const openModal = document.getElementById('openRegisterModal')
const modal = document.getElementById('modal')
const closerModal = document.getElementById('closeRegisterModal')
const registerForm = document.getElementById('register-form')
//!modal update
const modalUpdate = document.getElementById('modal-update')
const closerUpdateModal = document.getElementById('closeUpdateModal')
const updateForm = document.getElementById('update-form')
firebase.initializeApp(firebaseConfig)
const productRef = firebase.database().ref('products');
var database = firebase.database();

const showRegisterModal = () => {
  modal.classList.toggle('is-active')
  registerForm['codigo'].value = ""
  registerForm['precioUnitario'].value =""
  registerForm['cantidad'].value =""
  registerForm['precioTotal'].value =""
  registerForm['detalle'].value =""
}
const showUpdateModal = () => {
  modalUpdate.classList.toggle('is-active')
}
openModal.addEventListener('click', showRegisterModal)
closerModal.addEventListener('click', showRegisterModal)
closerUpdateModal.addEventListener('click', showUpdateModal)
//! insertar datos
registerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const codigo = registerForm['codigo'].value
  const precioUnitario = registerForm['precioUnitario'].value
  const cantidad = registerForm['cantidad'].value
  const precioTotal = registerForm['precioTotal'].value
  const detalle = registerForm['detalle'].value

  const registerProduct = productRef.push()
  registerProduct.set({
    Uid: registerProduct.toString().substring(firebase.database().ref().toString().length - 1),
    Codigo: codigo,
    PrecioUnitario: precioUnitario,
    Cantidad: cantidad,
    PrecioTotal: precioTotal,
    Detalle: detalle
  })
  showRegisterModal()
})

//! leer datos de registros
window.addEventListener('DOMContentLoaded', async (e) => {
  await productRef.on('value', (products) => {
    const productsTable = document.getElementById('products-table');
    productRef.get().then((snapshot) => {
      if (snapshot.exists()) {
       // console.log(snapshot.val());
        productsTable.innerHTML = ''
        productRef.once("value")
        .then(function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            console.log(childSnapshot.key)
            //console.log(snapshot.child(childSnapshot.key).child("Codigo").val());
            productsTable.innerHTML +=`<tr>
            <th>${snapshot.child(childSnapshot.key).child("Codigo").val()}</th>
            <td>${snapshot.child(childSnapshot.key).child("Detalle").val()}</td>
            <td>${snapshot.child(childSnapshot.key).child("PrecioUnitario").val()}</td>
            <td>${snapshot.child(childSnapshot.key).child("PrecioTotal").val()}</td>
            <td>${snapshot.child(childSnapshot.key).child("Cantidad").val()}</td>
            <td>
              <button class="button is-warning" data-id="${childSnapshot.key}">
                <i class="fas fa-pencil-alt"></i>
              </button>
              <button class="button is-danger" data-id="${childSnapshot.key}">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>`
          updateRegister();
        });
        
      });
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  })
  
})


function updateRegister() {
  const updateButtons = document.querySelectorAll('.is-warning');
  updateButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      console.log("key =>", e.target.dataset.id);
      const productsRef = firebase.database().ref('products/' + e.target.dataset.id);
      productsRef.get().then((doc) => {
        showUpdateModal();
        console.log('update =>',doc.val());
        updateForm['codigo'].value = `${doc.child("Codigo").val()}`;
        updateForm['precioUnitario'].value = `${doc.child("PrecioUnitario").val()}`;
        updateForm['cantidad'].value = `${doc.child("Cantidad").val()}`;
        updateForm['precioTotal'].value = `${doc.child("PrecioTotal").val()}`;
        updateForm['detalle'].value = `${doc.child("Detalle").val()}`;

     /*
        firebase.database().ref('products/' + e.target.dataset.id).update({
        Codigo: updateForm['codigo'].value ,
        PrecioUnitario: updateForm['precioUnitario'].value,
        Cantidad: updateForm['cantidad'].value,
        PrecioTotal: updateForm['precioTotal'].value,
        Detalle: updateForm['detalle'].value
      })
      showUpdateModal()
     */
      });
    });
  });
}

