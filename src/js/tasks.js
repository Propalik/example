// Skeleton
window.addEventListener("load", () => {
    const skeleton = document.querySelectorAll(".skeleton");
    skeleton.forEach(function (element) {
        element.classList.remove("skeleton");
    });
});

// Иконки heart /
const hearts = document.querySelectorAll(".card-heart");

hearts.forEach(heart => {
    heart.addEventListener("click", () => {
        heart.classList.toggle("heart-active");
    });
});
