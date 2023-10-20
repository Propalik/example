import {Modal} from "./components/modal.js";
import Swiper from "swiper"; // Инициализация слайдера
import {Navigation, Pagination} from "swiper/modules"; // Инициализация иконок, пагинации и т.д.

// Модалка формы
// eslint-disable-next-line no-unused-vars
const modalForm = new Modal("#modal", "#signup");
// Модалка навигации в мобилке
// eslint-disable-next-line no-unused-vars
const modalNav = new Modal("#modal-nav", ".burger-menu");

/* Слайдер в баннере */
const swiper = new Swiper(".swiper", {
    modules: [ Navigation, Pagination ],
    direction: "horizontal",
    /*
     * Autoplay: {
     *     delay: 2000,
     * },
     * Navigation arrows
     */
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
console.log("swiper", swiper);

const inputText = document.querySelector("#register-username");

/* Обработчик событий текстовый инпут */
inputText.addEventListener("change", event => {
    console.log(event.target.value);

    const error = document.querySelector("#username-error");

    // Регулярное выражение для проверки имени пользователя
    const usernamePattern = /^[a-zA-Zа-яА-Я]{3,}$/;

    if (!event.target.value) {
        error.textContent = "";
    } else if (!usernamePattern.test(event.target.value)) {
        error.textContent = "Имя пользователя не соответствует требованиям";
    } else {
        error.textContent = "";
    }
});
