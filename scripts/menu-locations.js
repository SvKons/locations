'use strict';

const parentMenu = document.querySelectorAll('.menu-locations__icon-container');
for (let i = 0; i < parentMenu.length; i++) {
    parentMenu[i].addEventListener('click', function () {
        const submenu = this.nextElementSibling;
        submenu.classList.toggle('active');
        this.querySelector('.menu-locations__circle').classList.toggle('active');
    });
}
