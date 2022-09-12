// for hamburger navigation

const hamBtn = document.querySelector('.ham')
const navBtns = document.querySelector('.nav')
const crossBtn = document.querySelector('.cross')

hamBtn.addEventListener('click', () => {
    navBtns.classList.add('display-block')
    navBtns.classList.remove('none-display')
    hamBtn.classList.add('none-display')
})

crossBtn.addEventListener('click', () => {
    navBtns.classList.add('none-display')
    hamBtn.classList.remove('none-display')
})