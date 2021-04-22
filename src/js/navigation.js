/* eslint-disable linebreak-style */

// вешаем прослушку на nav
const selectLi = document.querySelectorAll('.items');
const field = document.querySelector('.field-add-task__form');
let lastClicked = selectLi[0];

// Цикл перебора какой элемент по счету
for (let i = 0; i < selectLi.length; i++) {
  addRemoveClassList(i);
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

// Сортируем список задач
const navList = document.querySelector('.nav-list');
navList.addEventListener('click', (e) => {
  const tagLi = document.querySelectorAll('.todo-task');
  const tagP = document.querySelectorAll('.todo-task__text');
  for (let j = 0; j < tagLi.length; j++) {
    if (e.target.closest('#done') && !tagP[j].classList.contains('done-task')) {
      tagLi[j].classList.add('hidden');
    } else if (e.target.closest('#active') && tagP[j].classList.contains('done-task')) {
      tagLi[j].classList.add('hidden');
    } else {
      tagLi[j].classList.remove('hidden');
    }
  }
  if (e.target.closest('#done')) {
    field.classList.add('hidden');
  }
});
