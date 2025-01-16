document.addEventListener("DOMContentLoaded", function () {
  // Dynamically load the sidebar
  const sidebarPlaceholder = document.getElementById("sidebar-placeholder");
  
  if (sidebarPlaceholder) {
    fetch("/assets/sidebar.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Sidebar file not found");
        }
        return response.text();
      })
      .then((html) => {
        // Insert the fetched HTML into #sidebar-placeholder
        sidebarPlaceholder.innerHTML = html;

        // Once the sidebar is loaded, attach toggle functionality:
        const navToggleButton = document.getElementById("nav-toggle");
        const sideNav = document.getElementById("side-nav");
        const navCloseButton = document.getElementById("nav-close");

        if (navToggleButton && sideNav && navCloseButton) {
          // When user clicks the "hamburger" toggle
          navToggleButton.addEventListener("click", function () {
            sideNav.classList.toggle("active");
          });

          // When user clicks the "X" close button
          navCloseButton.addEventListener("click", function () {
            sideNav.classList.remove("active");
          });
        } else {
          console.error("Sidebar toggle button or sideNav or close button not found");
        }
      })
      .catch((error) => {
        console.error("Error loading sidebar:", error);
      });
  }
});
