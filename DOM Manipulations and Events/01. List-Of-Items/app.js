function addItem() {
    let li = document.createElement('li')
    let newItem = document.getElementById('newItemText');
    li.textContent = newItem.value;
    document.getElementById('items').appendChild(li);
    newItem.value = '';
}