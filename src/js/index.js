const buttons = document.querySelectorAll(".plan-button");
const dialog = document.querySelector(".plan-dialog");
const closeButton = dialog.querySelector(".close-button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        dialog.showModal();
    });
});

closeButton.addEventListener("click", () => {
    dialog.close();
});
