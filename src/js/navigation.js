/* eslint-disable linebreak-style */

// вешаем прослушку на nav
const selectLi = document.querySelectorAll('.items');
const field = document.querySelector('.field-add-task__form');
let lastClicked = selectLi[0];

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
  getFilter(i);
}

// Сортируем список задач

function getFilter(i) {
  selectLi[i].addEventListener('click', (e) => {
    const tagLi = document.querySelectorAll('.todo-task');
    const tagP = document.querySelectorAll('.todo-task__text');
    for (let j = 0; j < tagLi.length; j++) {
      if (
        document.getElementById('done') === selectLi[i] &&
        !tagP[j].classList.contains('done-task')
      ) {
        tagLi[j].classList.add('hidden');
      } else if (
        document.getElementById('active') === selectLi[i] &&
        tagP[j].classList.contains('done-task')
      ) {
        tagLi[j].classList.add('hidden');
      } else {
        tagLi[j].classList.remove('hidden');
      }

      if (document.getElementById('done') === selectLi[i]) {
        field.classList.add('hidden');
      }
    }
  });
}
