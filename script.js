document.addEventListener("DOMContentLoaded", function() {
    const imageCards = document.querySelectorAll(".image-card");

    imageCards.forEach(card => {
        card.addEventListener("click", function() {
            card.classList.toggle("clicked");
        });
    });
});
