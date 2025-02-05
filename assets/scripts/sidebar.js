const navCloseButton = document.getElementById("nav-close");
if (navCloseButton) {
// When user clicks the "X" close button
navCloseButton.addEventListener("click", function () {
  sideNav.classList.remove("active");
});
} else {
console.error("Sidebar toggle button or sideNav or close button not found");
}