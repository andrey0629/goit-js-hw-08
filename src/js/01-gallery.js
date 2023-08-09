// Задание 1 - библиотека SimpleLightbox
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Добавь библиотеку SimpleLightbox как зависимость проекта используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
// Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).
// Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.

// // Описан в документации
import SimpleLightbox from "simplelightbox";
// // Дополнительный импорт стилей
// import ... "node_modules/simplelightbox/dist/simple-lightbox.min.css"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const gallery = document.querySelector(".gallery");

const createMarkup = createGallery(galleryItems);

gallery.insertAdjacentHTML("afterbegin", createMarkup);

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        let markup = "";
        return markup = `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    }).join("");
};

    
let instance = new SimpleLightbox('.gallery a', {
    /* options */
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});