const openModal = document.getElementById('openRegisterModal')
const modal = document.getElementById('modal')
const closerModal = document.getElementById('closeRegisterModal')
const registerForm = document.getElementById('register-form')

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
    console.log(codigo, precioUnitario, cantidad, precioTotal, detalle)
})