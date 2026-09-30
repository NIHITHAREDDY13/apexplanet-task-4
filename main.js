/* =================================
   STUDENTHUB MAIN JAVASCRIPT
================================= */

// Mobile navigation menu
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    if (navLinks) {
        navLinks.classList.toggle("show");
    }
}


// Close mobile menu when a navigation link is clicked
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navLinks = document.querySelector(".nav-links");

        if (navLinks) {
            navLinks.classList.remove("show");
        }

    });

});


// Display a welcome message when the page loads
document.addEventListener("DOMContentLoaded", function() {

    console.log("StudentHub loaded successfully!");

});