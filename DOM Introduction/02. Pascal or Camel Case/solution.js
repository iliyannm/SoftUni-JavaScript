function solve() {
    let text = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;
    let result = [];

    for (word of text.split(' ')) {
        result.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    if (convention = 'Camel Case') {
        result[0] = result[0].charAt(0).toLowerCase() + result.slice(1);
    } else if (convention != 'Pascal Case') {
        result = 'Error!';
    }

    document.getElementById('result').textContent = result;
}