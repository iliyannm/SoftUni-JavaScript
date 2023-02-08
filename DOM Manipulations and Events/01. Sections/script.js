function create(words) {
	let content = document.querySelector('#content');
	let p;
	let div;

	for (el of words) {
		p = document.createElement('p');
		p.textContent = el;
		p.style.display = 'none';
		div = document.createElement('div');
		div.appendChild(p);
		content.appendChild(div);
	}

	[...document.querySelectorAll('div')].forEach(d => d.addEventListener('click', onClick));

	function onClick(event){
		if (event.target.children[0].tagName == 'P') {
			event.target.children[0].style.display = '';
		}
	}
}