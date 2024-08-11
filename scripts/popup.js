'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const openPopupButton = document.getElementById('open-popup');
    const closePopupButton = document.getElementById('close-popup');
    const savePopupButton = document.getElementById('save-popup-create');
    const openPopupChangeButton = document.getElementById('new-popup');
    const closePopupChangeButton = document.getElementById('close-popup-change');
    const popupCreate = document.getElementById('popup-create');
    const popupChange = document.getElementById('popup-change');

    // Первые попап - открытие/закрытие
    openPopupButton.addEventListener('click', () => {
        popupCreate.style.display = 'flex';
    });

    closePopupButton.addEventListener('click', () => {
        popupCreate.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target === popupCreate) {
            popupCreate.style.display = 'none';
        }
    });

    // Второй попап - открытие/закрытие
    openPopupChangeButton.addEventListener('click', () => {
        popupChange.style.display = 'flex';
        popupCreate.style.display = 'none';
    });

    closePopupChangeButton.addEventListener('click', () => {
        popupChange.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target === popupChange) {
            popupChange.style.display = 'none';
        }
    });

    // Переключаемся между попапами при нажатии на кнопку "Сохранить" в первом попапе
    savePopupButton.addEventListener('click', () => {
        popupCreate.style.display = 'none';
        popupChange.style.display = 'flex';
    });
});

// Стрелочки Popup

const selectWrap = document.querySelector('.popup__select-form');
const arrow = document.querySelector('.popup__arrow');

selectWrap.addEventListener('click', () => {
    selectWrap.classList.toggle('open');
});

const selectWrapChange = document.querySelector('.popup__select-form_change');
const arrowChange = document.querySelector('.popup__arrow_change');

selectWrapChange.addEventListener('click', () => {
    selectWrapChange.classList.toggle('open');
    arrowChange.classList.toggle('open');
});
