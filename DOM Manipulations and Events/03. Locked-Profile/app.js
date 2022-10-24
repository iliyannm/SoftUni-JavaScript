function lockedProfile() {
    let main = document.querySelector('main');
    main.addEventListener('click', showHideInfo);
    main.addEventListener('click', lockUnlock);

    function showHideInfo(event) {
        if (event.target.tagName == 'BUTTON') {
            if (event.target.textContent == 'Show more' && event.target.parentElement.children[4].checked == true) {
                event.target.parentElement.children[9].style.display = 'block';
                event.target.textContent = 'Hide it';
            } else if (event.target.textContent == 'Hide it' && event.target.parentElement.children[4].checked == true) {
                event.target.parentElement.children[9].style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }
    }

    function lockUnlock(event) {
        if (event.target.type == 'radio') {
            if (event.target.value == 'lock') {
                event.target.checked = 'true';
                event.target.parentElement.children[4].checked = '';
            } else if (event.target.value == 'unlock') {
                event.target.checked = 'true';
                event.target.parentElement.children[2].checked = '';
            }
        }
    }
}