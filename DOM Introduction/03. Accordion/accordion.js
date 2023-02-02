function toggle() {
    let command = document.querySelector('.button').textContent;

    if (command == 'More') {
        document.querySelector('.button').textContent = 'Less';
        document.querySelector('#extra').style.display = 'block';
    } else if (command = 'Less') {
        document.querySelector('.button').textContent = 'More';
        document.querySelector('#extra').style.display = 'none';
    }
}