function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let select = document.getElementById('menu');
    
    let option = document.createElement('option');

    if (newItemText.value != '' && newItemValue.value != '') {
        option.textContent = newItemText.value;
        option.value = newItemValue.value;
        select.appendChild(option);
        newItemText.value = '';
        newItemValue.value = '';
    }
}