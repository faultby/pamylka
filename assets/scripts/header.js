// Once header is loaded, set up the side-nav toggle
const navToggleButton = document.getElementById('nav-toggle');
const sideNav = document.getElementById('side-nav');

//check if nav-toggle and side-nav both exist
if (navToggleButton && sideNav) {
  
  navToggleButton.addEventListener('click', function () {
    sideNav.classList.toggle('active');
  });
}
  