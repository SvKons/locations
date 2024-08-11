'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.querySelector('.aside__close-menu');
    const asideMenu = document.querySelector('.aside');
    const asideItemsText = document.querySelectorAll('.aside__text');
    const closeButtonText = closeButton.querySelector('.aside__text_button');
    const asideIcon = document.querySelectorAll('.aside__icon');

    closeButton.addEventListener('click', function () {
        // Меняем класс для всего меню
        asideMenu.classList.toggle('aside_collapsed');

        // Меняем класс текста в меню
        asideItemsText.forEach(item => {
            item.classList.toggle('aside__text_hidden');
        });

        // Меняем класс для иконки
        asideIcon.forEach(item => {
            item.classList.toggle('aside__icon_show-icon');
        });

        // Меняем класс текста в кнопке
        closeButtonText.classList.toggle('aside__close-menu_text_hidden');

        // Меняем положение иконки стрелочки
        const arrowIcon = closeButton.querySelector('.aside__icon_arrow');
        if (arrowIcon) {
            arrowIcon.classList.toggle('aside__icon_arrow_rotated');
        }
    });
});
