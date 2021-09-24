const btnNav = document.getElementById('navbar-toggle'),
        navMenu = document.getElementById('navbar-links');

btnNav.addEventListener('click', () => {
    if(navMenu.classList.contains('activo')) {
        navMenu.classList.remove('activo');
    }
    else {
        navMenu.classList.add('activo');
    }
});