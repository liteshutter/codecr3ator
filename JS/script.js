var menuBar = document.getElementById('menuBar');
var navlinks = document.getElementById('navlinks');

menuBar.addEventListener('click', function() {
    navlinks.classList.toggle('open');
});
