function sumTable() {
    let elements = Array.from(document.querySelectorAll('tr')).slice(1, -1);
    let sum = 0;
    for (el of elements) {
        sum += Number(el.children[1].textContent)
    }
    document.querySelector('#sum').textContent = sum;
}