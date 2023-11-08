/* 
    1. Add id="menu" into root markup (backdrop)
    2. Add id="close-menu" into close menu button
    3. Add id="show-menu" into open menu button
*/

const mobMenuRef = document.querySelector('#menu');
const bodyRef = document.querySelector('body');

mobMenuRef
    .querySelector('#close-menu')
    .addEventListener('click', closeMenu);

mobMenuRef
    .querySelector('ul')
    .addEventListener('click', closeMenuByItemClick);
    

document.querySelector('#show-menu').addEventListener('click', openMenu);

function closeMenu() {
    mobMenuRef.classList.remove('is-open');
    bodyRef.classList.remove('overflow-hidden')
}

function openMenu() {
    mobMenuRef.classList.add('is-open');
    bodyRef.classList.add('overflow-hidden')
}

function closeMenuByItemClick(event) {
    if (event.target !== event.currentTarget) {
        closeMenu()
    }
}
