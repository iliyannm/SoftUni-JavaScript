function extractText() {
    let items = Array.from(document.querySelectorAll('li')).map(e => e.textContent).join('\n')
    document.getElementById('result').value = items;
}