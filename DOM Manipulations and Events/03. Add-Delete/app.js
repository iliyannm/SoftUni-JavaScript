function addItem() {
    let list = document.getElementById('items');
    let input = document.getElementById('newItemText');
    let newLi = document.createElement('li');
    newLi.textContent = input.value;
    list.addEventListener('click', onDelete)

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    newLi.appendChild(deleteBtn);

    //deleteBtn.addEventListener('click', onDelete)

    document.getElementById('items').appendChild(newLi);
    document.getElementById('newItemText').value = '';

    function onDelete(event) {
        if (event.target.tagName = 'A') {
            event.target.parentElement.remove();
        }
    }
}