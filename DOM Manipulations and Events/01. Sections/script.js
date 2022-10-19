function create(words) {
	let content = document.getElementById('content');
	let listOfDivs = [];

	for (let word of words) {
		let div = document.createElement('div');
		let p = document.createElement('p');
		p.style.display = 'none';
		p.textContent = word;
		div.appendChild(p);
		listOfDivs.push(div);
	}

	for (d of listOfDivs) {
		content.appendChild(d);
	}

	content.addEventListener('click', showParagraph);

	function showParagraph(event) {
		if (event.target.tagName = 'DIV') {
			event.target.children[0].style.display = '';
		}
	}
}