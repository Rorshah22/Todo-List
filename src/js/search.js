/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const search = document.querySelector('#search');

const toDoList = document.querySelector('.todo-list');

search.oninput = function getSearch() {
  if (search.keyCode === 13) {
    console.log('enter');
  }
  const li = document.querySelectorAll('.todo-task');
  const tagsP = document.querySelectorAll('.todo-task__text');
  const filter = search.value.toLowerCase();

  for (let i = 0; i < tagsP.length; i++) {
    const textP = tagsP[i].textContent.toLowerCase();

    if (filter !== '') {
      if (textP.indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    } else {
      li[i].style.display = '';
    }
  }
  // toLocal();
};
search.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    console.log('enter');
  }
});
