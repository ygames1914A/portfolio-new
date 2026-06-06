const burgerMenu = document.querySelector('.burger-menu');
const burgerLinks = document.querySelector('.burger-links');


burgerMenu.addEventListener('click',() => {
    burgerLinks.classList.toggle('active')
    burgerMenu.classList.toggle('active')
})