function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let collection = document.querySelectorAll('tbody tr');
   let keyWord = document.querySelector('#searchField');

   function onClick() {
      for (el of collection) {
         el.classList.remove('select')
         if (el.innerHTML.includes(keyWord.value)) {
            el.className = 'select';
         }
      }
   }   
}