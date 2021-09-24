const btnNav = document.getElementById('navbar-toggle'),
        navMenu = document.getElementById('navbar-links'),
        moreBtn =document.getElementById('more-btn'),
        moreSect = document.getElementById('more-section');

btnNav.addEventListener('click', () => {
    if(navMenu.classList.contains('activo')) {
        navMenu.classList.remove('activo');
    }
    else {
        navMenu.classList.add('activo');
    }
});

moreBtn.addEventListener('click', () => {
    if(moreSect.classList.contains('activo')) {
        moreSect.classList.remove('activo');
    }
    else {
        moreSect.classList.add('activo');
    }
});