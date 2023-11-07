const openMenu = document.querySelector('#open-btn');
const closeMenu = document.querySelector('#close-btn');
const menu = document.querySelector('#menu')

openMenu.addEventListener('click', () => {
    menu.style.display = 'flex';
    menu.style.top = '0';
})

closeMenu.addEventListener('click', () => {
    menu.style.top = '-100%';
})