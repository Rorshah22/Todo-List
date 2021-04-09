const btnAdd = document.querySelector('.btn-add-task');
const toDoList = document.querySelector('.todo-list');
const task = document.querySelector('.new-task');

//  Вешаем прослушку на клик по кнопке Add

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  if (task.value === '') return;
  createElement();
});

function createElement() {
  const tagLi = document.createElement('li');
  const tagP = document.createElement('p');
  const btnMark = document.createElement('button');
  const btnClear = document.createElement('button');

  tagLi.classList.add('todo-task');
  tagP.classList.add('todo-task__text');
  btnMark.classList.add('btn-mark-important');
  btnClear.classList.add('btn-clear');

  tagP.textContent = task.value;
  task.value = '';

  btnMark.textContent = 'MARK IMPORTANT';
  toDoList.append(tagLi);
  tagLi.append(tagP, btnMark, btnClear);

  //  Добавляем класс по клику для кнопки mark important
  btnMark.addEventListener('click', (e) => {
    tagP.classList.toggle('mark-important');
    btnMark.classList.toggle('btn-mark-not-important');
    if (btnMark.classList.contains('btn-mark-not-important')) {
      btnMark.textContent = 'NOT IMPORTANT';
      tagP.classList.remove('done-task-after-none');
    } else {
      btnMark.textContent = 'MARK IMPORTANT';
      tagP.classList.add('done-task-after-none');
    }
  });
  //  Удаляем Li по нажитию кнопки  с классом  btn-clear
  btnClear.addEventListener('click', (e) => {
    tagLi.remove();
  });
  // При клике на задачу, т.е. тег li  вешаем класс done-task на тег р и
  tagLi.addEventListener('click', (e) => {
    if (e.target === tagLi) {
      if (btnMark.classList.contains('btn-mark-not-important')) {
        tagP.classList.toggle('done-task');
        tagP.classList.remove('done-task-after-none');
      } else {
        tagP.classList.toggle('done-task');
        tagP.classList.add('done-task-after-none');
      }
    }
  });
}
