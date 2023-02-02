function search() {
    let searchWord = document.querySelector('#searchText').value;
    let towns = document.querySelectorAll('li');
    let result = document.getElementById('result');
    let matches = 0;

    for (let town of towns) {
      town.style.textDecoration = '';
      town.style.fontWeight = '';
    }

    for (let town of towns) {
      if (town.textContent.toLowerCase().includes(searchWord.toLowerCase())
      && searchWord != '') {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matches += 1;
    }
   }

   result.textContent = `${matches} matches found`;
}
