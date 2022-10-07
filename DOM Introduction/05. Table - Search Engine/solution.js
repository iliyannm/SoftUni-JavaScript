function solve () {
   let collection = document.getElementsByTagName('tbody tr');
   let keyWord = document.getElementById('searchField');
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   function onClick() {
      for (let el of collection) {
         el.classList.remove('select')
         if (el.innerHTML.includes(keyWord.value)) {
            el.className = 'select'
         }
      }

   keyWord.value = ''
   }
}