/* eslint-disable linebreak-style */
// вешаем прослушку на nav
const navigation = document.querySelector('.nav-list');
const selectLi = document.querySelector('.items');

navigation.addEventListener('click', (e) => {
  if (e.target === selectLi) {
    console.log('hi');
  }
});
