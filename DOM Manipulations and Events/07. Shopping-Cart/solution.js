function solve() {
   let addButtons = document.querySelectorAll('button[class="add-product"]');
   let checkoutButton = document.querySelector('button[class="checkout"]');
   let textArea = document.querySelector('textarea');
   let totalPrice = 0;
   let list = new Set();

   [...addButtons].forEach(
      a => a.addEventListener('click', addItem)
   );

   checkoutButton.addEventListener('click', checkout);
   
   function addItem(event) {
      let name = event.target.parentElement.parentElement.children[1].children[0].textContent;
      let money = event.target.parentElement.parentElement.children[3].textContent;
      textArea.value += `Added ${name} for ${money} to the cart.\n`;
      totalPrice += Number(money);
      list.add(name);
   }

   function checkout(event) {
      textArea.value += `You bought ${[...list].join(', ')} for ${totalPrice.toFixed(2)}.`;
      [...addButtons].forEach(
         a => a.removeEventListener('click', addItem)
      );
      checkoutButton.removeEventListener('click', checkout);
   }

}