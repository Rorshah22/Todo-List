const search = document.querySelector('#search');

search.addEventListener('keypress', (e) => {
  const tagP = document.querySelectorAll('p');
  for (let i = 0; i < tagP.length; i++) {
    if (e.target.tagName === 'LI' && search.value.length > 2) {
      console.log(tagP[i].indexOF(search.value));
    }
  }
});
