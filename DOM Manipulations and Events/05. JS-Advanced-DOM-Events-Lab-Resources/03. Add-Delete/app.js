function addItem() {
    let input = document.getElementById('newItemText');
    let newLi = document.createElement('li');
    newLi.textContent = input.value;

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    newLi.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete)

    document.getElementById('items').appendChild(newLi);
    document.getElementById('newItemText').value = '';

    function onDelete(event) {
        event.target.parentElement.remove();
    }
}