const openModal = document.getElementById('openRegisterModal')
const modal = document.getElementById('modal')
const closerModal = document.getElementById('closeRegisterModal')

const showRegisterModal = () =>{
    modal.classList.toggle('is-active')
}

openModal.addEventListener('click',showRegisterModal)
closerModal.addEventListener('click',showRegisterModal)