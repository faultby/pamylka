
//listen for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // querySelector basically looks for a CSS tag <header>, and then assigns it to the headerElement constant
  const headerElement = document.querySelector("header");
  
  if (headerElement) { //check is <header> exits
    fetch("/assets/header.html") //fetch() loads the html file with the header

      //ckech if the header is loaded successfully
      .then((response) => {
        //if no success loadeing header.html
        if (!response.ok) {
          throw new Error("Header file not found");
        }
        //if ok, it returns a text of the header file to insert
        return response.text();
      })

      //the text from above is now passed on to the 'html' variable
      .then((html) => {
        //innerHTML inserts the html variable into the <header> in the document
        headerElement.innerHTML = html;

        // Once header is loaded, set up the side-nav toggle
        const navToggleButton = document.getElementById('nav-toggle');
        const sideNav = document.getElementById('side-nav');

        //check if nav-toggle and side-nav both exist
        if (navToggleButton && sideNav) {
          
          navToggleButton.addEventListener('click', function () {
            sideNav.classList.toggle('active');
          });
        }
      })
      .catch((error) => {
        console.error("Error loading header:", error);
      });
  }
});
  