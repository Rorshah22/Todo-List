/* eslint-disable linebreak-style */

// вешаем прослушку на nav
const selectLi = document.querySelectorAll('.items');
const field = document.querySelector('.field-add-task__form');
const nav = document.querySelector('.nav');

let lastClicked = selectLi[0];

// Localstorage
if (localStorage.getItem('tab')) {
  nav.innerHTML = localStorage.getItem('tab');
}
let tabArray;
function toLocal() {
  tabArray = nav.innerHTML;
  localStorage.setItem('tab', tabArray);
}

// функция добавления удаления активного класса
function addRemoveClassList(i) {
  selectLi[i].addEventListener('click', () => {
    lastClicked.classList.remove('items-checked');
    selectLi[i].classList.add('items-checked');
    lastClicked = selectLi[i];
    field.classList.remove('hidden');
  });
}

// Цикл перебора какой элемент по счету
for (let i = 0; i < selectLi.length; i++) {
  addRemoveClassList(i);
}

// Сортируем список задач
const navList = document.querySelector('.nav-list');
navList.addEventListener('click', (e) => {
  const tagLi = document.querySelectorAll('.todo-task');
  const tagP = document.querySelectorAll('.todo-task__text');
  const buttonMark = document.querySelectorAll('.btn-mark-important');
  for (let j = 0; j < tagLi.length; j++) {
    console.log(navList);
    if (e.target.closest('#done') && !tagP[j].classList.contains('done-task')) {
      tagLi[j].classList.add('hidden');
    } else if (e.target.closest('#active') && tagP[j].classList.contains('done-task')) {
      tagLi[j].classList.add('hidden');
    } else {
      tagLi[j].classList.remove('hidden');
    }

    if (e.target.closest('#done')) {
      buttonMark[j].classList.add('btn-mark-important-hidden');
    } else {
      buttonMark[j].classList.remove('btn-mark-important-hidden');
    }
  }
  if (e.target.closest('#done')) {
    field.classList.add('hidden');
  }
});

// При перезагрузке страницы, показать все li, удалить класс hidden
const tagLi = document.querySelectorAll('.todo-task');
for (const iterator of tagLi) {
  if (document.getElementById('all')) {
    iterator.classList.remove('hidden');
  }
}
