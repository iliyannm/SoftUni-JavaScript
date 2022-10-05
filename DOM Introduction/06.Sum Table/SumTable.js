function sumTable() {
    const elementsArray = Array.from(document.getElementsByTagName('tr')).slice(1, -1);
    let sum = 0;

    for (let elem of elementsArray) {
        sum += Number(elem.lastElementChild.textContent);
    }

    document.getElementById('sum').textContent = sum;
}