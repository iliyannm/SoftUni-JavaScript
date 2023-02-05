function addItem() {
    let items = document.getElementById('items');
    let newElement = document.getElementById('newItemText')
    let li = document.createElement('li');
    li.innerHTML = newElement.value + '<a href="#">[Delete]</a>';
    items.appendChild(li);
    newElement.value = '';

    Array.from(document.querySelectorAll('a')).forEach(a => a.addEventListener('click', onCLick));

    function onCLick(event) {
        event.target.parentElement.remove();
    }
}