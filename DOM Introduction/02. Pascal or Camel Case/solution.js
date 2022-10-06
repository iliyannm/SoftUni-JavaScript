function solve() {
  let text = document.getElementById('text').value;
  let namingConvetion = document.getElementById('naming-convention').value;
  let result = '';
  let words = text.split(' ');
  
  if (namingConvetion == 'Camel Case') {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase()
      if (i != 0) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
      }
    }
  } else if (namingConvetion == 'Pascal Case') {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase()
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
    }
  } else {
    return document.getElementById('result').textContent = 'Error!'
  }

  result = words.join('')

  document.getElementById('result').textContent = result
}