function solve() {
   let elements = [];
   let price = 0;
   let descriptionField = document.getElementsByTagName('textarea')[0];
   let parentItemElement = ''
   let bougthItem = ''
   let money = 0;
   let checkoutBtn = document.querySelectorAll('button')[3]
   let existing = false;
   let addButtons = document.querySelectorAll('div .product .product-add .add-product')

   document.querySelector('div').addEventListener('click', addItem);
   checkoutBtn.addEventListener('click', finishOrder)

   function findEl(item, elems) {
      for (el of elems) {
         if (el == item) {
            existing = true;
         }
      }
      if (existing == false) {
         elems.push(item)
      } else {
         existing = false
      }
   }

   function addItem(event) {
      if (event.target.tagName == 'BUTTON') {
         parentItemElement = event.target.parentElement.parentElement;
         bougthItem = parentItemElement.children[1].children[0].textContent;
         findEl(bougthItem, elements);
         money = parentItemElement.children[3].textContent;
         price += Number(money);
         descriptionField.disabled = false;
         descriptionField.value += `Added ${bougthItem} for ${money} to the cart.` + '\n';
         descriptionField.disabled = true;
      }
   }

   function finishOrder(event) {
      descriptionField.disabled = false;
      descriptionField.value += `You bought ${Array.from(elements).join(', ')} for ${price.toFixed(2)}.` + '\n';
      descriptionField.disabled = true;
      document.querySelector('div').removeEventListener('click', addItem);
      checkoutBtn.removeEventListener('click', finishOrder)
   }
}