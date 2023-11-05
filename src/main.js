/* 
    1. Add id="menu" into root markup (backdrop)
    2. Add id="close-menu" into close menu button
    3. Add id="show-menu" into open menu button
*/

const mobMenuRef = document.querySelector('#menu');

mobMenuRef
    .querySelector('#close-menu')
    .addEventListener('click', closeMenu);

document.querySelector('#show-menu').addEventListener('click', openMenu);

function closeMenu() {
    mobMenuRef.classList.remove('is-open');
}

function openMenu() {
    mobMenuRef.classList.add('is-open');
}