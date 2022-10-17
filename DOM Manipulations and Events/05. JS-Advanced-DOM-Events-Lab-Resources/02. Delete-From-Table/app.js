function deleteByEmail() {
    const input = document.querySelector('input[name="email"]').value;
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const found = false;

    for (let row of rows) {
        if (row.children[1].textContent == input) {
            row.parentElement.removeChild(row);
            found = true;
        }
    }

    if (found) {
        document.getElementById('result').textContent = 'Deleted.'
    } else {
        document.getElementById('result').textContent = 'Not found.'
    }
}