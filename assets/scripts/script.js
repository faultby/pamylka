
// Select the close button
const sideNav = document.getElementById('side-nav')
const navCloseButton = document.getElementById('nav-close');

// Add an event listener for the close button
navCloseButton.addEventListener('click', function () {
    sideNav.classList.remove('active'); // Remove the 'active' class to close the menu
});

  