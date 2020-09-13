"use strict";

let modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close'),
    modalContent = document.querySelector('.modal__content'),
    modalDialog = document.querySelector('.modal__dialog');

modalTrigger.forEach((item) => {
    item.addEventListener('click', modalOpen);
});

function modalOpen() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
}

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = "";
}

modalClose.addEventListener('click', function (event) {
    event.preventDefault();
    closeModal();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.which === 27 && modal.classList.contains('show')) {
        closeModal();
    }
});

const modalTimerId = setTimeout(modalOpen, 3000);

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        modalOpen();
        window.removeEventListener('scroll', showModalByScroll);
    }
}
window.addEventListener('scroll', showModalByScroll);