function search() {
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let result = document.getElementById('result');
   let searchingWord = document.getElementById('searchText').value;
   let matches = 0;

   for (town of towns) {
      if (town.textContent.includes(searchingWord)) {
         town.style.textDecoration = "underline";
         town.style.fontWeight = 'bold';
         matches += 1;
      }
   }

   result.textContent = `${matches} matches found`;
}
