/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const search = document.querySelector('#search');

// search.addEventListener('keyup', getSearch);
//  && search.value.length > 2
// search.addEventListener('keypress', getSearch);
const toDoList = document.querySelector('.todo-list');

search.oninput = function getSearch() {
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