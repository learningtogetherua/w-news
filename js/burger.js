// alert('test')
const btnLines = document.querySelector('.header__burger-lines')
console.log(btnLines);
const btnCross = document.querySelector('.header__burger-cross')
console.log(btnCross);

const navElement = document.querySelector('nav')
console.log(navElement);


btnLines.addEventListener('click', () =>{
    navElement.classList.add('active-menu')
})
btnCross.addEventListener('click', () =>{
    navElement.classList.remove('active-menu')
})