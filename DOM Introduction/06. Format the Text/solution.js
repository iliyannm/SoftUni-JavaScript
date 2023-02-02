function solve() {
  let text = document.querySelector('#input').value;
  let result = document.querySelector('#output');

  let senteces = text.split('.').filter(s => s.length != 0);

  while (senteces.length > 0) {
      let textForParagraph = senteces.splice(0, 3).join('. ') + '.';
      let p = document.createElement('p');
      p.textContent = textForParagraph;
      result.appendChild(p);
    }
}