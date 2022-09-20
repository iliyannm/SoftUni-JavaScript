function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let listElements = document.querySelectorAll('tbody tr')
   let keyWord = document.getElementById('searchField')

   function onClick() {
      for (let el of listElements) {
         el.classList.remove('select')
         if (el.innerHTML.includes(keyWord.value)) {
            el.className = 'select'
         }
      }

   keyWord.value = ''
   }
}