/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

const btnAdd = document.querySelector('.btn-add-task');
const toDoList = document.querySelector('.todo-list');
const task = document.querySelector('.new-task');

// Localstorage
if (localStorage.getItem('todo')) {
  toDoList.innerHTML = localStorage.getItem('todo');
}
let todoArray;
function toLocal() {
  todoArray = toDoList.innerHTML;
  localStorage.setItem('todo', todoArray);
}

// Добавление задачи при нажатии на enter
window.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) btnAdd.click();
});

//  Вешаем прослушку на клик по кнопке Add
btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  if (task.value.trim() === '') return;

  createElement();
  toLocal();
});

function createElement() {
  const newTagLi = document.createElement('li');
  const newTagP = document.createElement('p');
  const newBtnMark = document.createElement('button');
  const newBtnClear = document.createElement('button');
  newTagLi.classList.add('todo-task');
  newTagP.classList.add('todo-task__text');
  newBtnMark.classList.add('btn-mark-important');
  newBtnClear.classList.add('btn-clear');

  newTagP.textContent = task.value;
  task.value = '';
  newBtnMark.textContent = 'MARK IMPORTANT';
  toDoList.append(newTagLi);
  newTagLi.append(newTagP, newBtnMark, newBtnClear);
}

toDoList.addEventListener('click', (e) => {
  const btnMark = document.querySelectorAll('.btn-mark-important');
  const tagP = document.querySelectorAll('.todo-task__text');
  const tagLi = document.querySelectorAll('.todo-task');
  // удаляем тег li
  if (e.target.closest('.btn-clear')) {
    e.target.closest('LI').remove();
    // toLocal();
  }

  // Переключение на важную задачу
  for (let i = 0; i < btnMark.length; i++) {
    if (btnMark[i] === e.target) {
      btnMark[i].classList.toggle('btn-mark-not-important');
      if (btnMark[i].classList.contains('btn-mark-not-important')) {
        btnMark[i].textContent = 'NOT IMPORTANT';
        tagP[i].classList.add('mark-important');
        tagP[i].classList.remove('done-task-after-none');
      } else {
        btnMark[i].textContent = 'MARK IMPORTANT';
        tagP[i].classList.remove('mark-important');
        tagP[i].classList.add('done-task-after-none');
      }
    }
  }

  // Зачеркиваем выполненную задачу
  for (let i = 0; i < tagP.length; i++) {
    if (e.target === tagLi[i] || e.target === tagP[i]) {
      if (btnMark[i].classList.contains('btn-mark-not-important')) {
        tagP[i].classList.toggle('done-task');
        tagP[i].classList.remove('done-task-after-none');
      } else {
        tagP[i].classList.toggle('done-task');
        tagP[i].classList.add('done-task-after-none');
      }
    }
    // перекидываем задачу на вкладку done
    const activeLi = document.querySelector('#active');
    if (activeLi.classList.contains('items-checked') && e.target === tagLi[i]) {
      tagLi[i].classList.add('hidden');
    }
    const doneLi = document.querySelector('#done');
    // перекидываем задачу на вкладку active
    if (doneLi.classList.contains('items-checked') && e.target === tagLi[i]) {
      tagLi[i].classList.add('hidden');
    }
  }

  toLocal();
});
