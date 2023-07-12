const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

// This function allows the menu to have effects and change the state of the DOM
function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close'); 
        menu.classList.add('show'); 
        menuNav.classList.add('show'); 
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State to 'true' so it's recorded as shown in the State variable
        showMenu = true;
    } else {
        // This is the opposite of above in the 'if' statement
        menuBtn.classList.remove('close'); 
        menu.classList.remove('show'); 
        menuNav.classList.remove('show'); 
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State to 'false' so it's recorded as shown in the State variable
        showMenu = false;
    }
}