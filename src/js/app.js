
// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();

/* Модуль для работы с меню (Бургер) */
flsFunctions.menuInit();

/*
Модуль работы со спойлерами
*/
flsFunctions.spollers();


/*
Попапы
*/
import './libs/popup.js'


import * as flsForms from "./files/forms/forms.js";

/* Работа с полями формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */

flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});



// Функции работы скроллом
import * as flsScroll from "./files/scroll/scroll.js";



/* Динамический адаптив */

import "./libs/dynamic_adapt.js";


/* Подключаем файлы со своим кодом */
import { openModal, closeModal, scrollToSection, menuClose } from './modal.js';
let isMenuOpen = false;

document.getElementById("openModal").addEventListener("click", (e) => {

	console.log('openModal clicked');
	if (!isMenuOpen) {
		openModal();
		isMenuOpen = true;
	} else {
		CloseMenu();
	}

	console.log('openModal processed' + isMenuOpen);
});

document.getElementById("openModal").addEventListener("click", (e) => {
	openModal();
	isMenuOpen = true;
	console.log('openModal ' + isMenuOpen);
});

document.querySelectorAll(".menu__body a").forEach((link) => {
	link.addEventListener("click", scrollToSection);
});

document.querySelectorAll(".menu__body a").forEach((link) => {
	link.addEventListener("click", (e) => {

		console.log('before goTO: ' + isMenuOpen);
		scrollToSection(e);
		CloseMenu();
		console.log('after goTO: ' + isMenuOpen);
		menuClose()

	});
});

function CloseMenu() {
	closeModal();
	isMenuOpen = false;

}

