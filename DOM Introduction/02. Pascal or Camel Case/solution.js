function solve() {
    let text = document.querySelector('#text').value;
    let convention = document.querySelector('#naming-convention').value;
    let transformedText = text.split(' ')
    let finalText = [];
    let result;

    for (let word of transformedText) {
        finalText.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }

    if (convention == 'Pascal Case') {
        result = finalText.join('')
    } else if (convention == 'Camel Case') {
        finalText[0] = finalText[0].charAt(0).toLowerCase() + finalText[0].slice(1).toLowerCase();
        result = finalText.join('');
    } else {
        result = 'Error!'
    }

    document.querySelector('#result').textContent = result;
}