// =========================================
// StudentHub Contact Form
// =========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


// =========================================
// Form Submit
// =========================================

contactForm.addEventListener("submit", function(event) {

    // Prevent page from refreshing
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    // =========================================
    // Validation
    // =========================================

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all the fields.";

        formMessage.style.color = "#d64545";

        return;
    }


    // =========================================
    // Success Message
    // =========================================

    formMessage.textContent =
        `Thank you, ${name}! Your message has been submitted successfully.`;

    formMessage.style.color = "#4a8f5c";


    // Clear the form
    contactForm.reset();

});