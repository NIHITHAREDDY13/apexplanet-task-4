// =========================================
// StudentHub Products Search
// =========================================

const searchInput = document.getElementById("productSearch");
const productCards = document.querySelectorAll(".product-card");

// Search products
searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase().trim();

    productCards.forEach(function (card) {

        const productName =
            card.dataset.name.toLowerCase();

        const productContent =
            card.textContent.toLowerCase();

        if (
            productName.includes(searchText) ||
            productContent.includes(searchText)
        ) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }

    });

});