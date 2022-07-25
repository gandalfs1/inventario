let menuToggle = document.querySelector('.toggle');
let navigations = document.querySelector('.navigations');
menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
    navigations.classList.toggle('active');
}
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active'
    }
}