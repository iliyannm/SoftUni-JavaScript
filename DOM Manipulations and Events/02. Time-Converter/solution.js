function attachEventsListeners() {
    let buttons = document.querySelectorAll("input[type='button']");
    [...buttons].forEach(b => b.addEventListener('click', convert));
    let number;

    function convert(event) {
        if (event.target.id == 'daysBtn') {
            number = Number(event.target.previousElementSibling.value);
            document.querySelector('input[id="hours"]').value = number * 24;
            document.querySelector('input[id="minutes"]').value = number * 24 * 60;
            document.querySelector('input[id="seconds"]').value = number * 24 * 60 * 60;
        } else if (event.target.id == 'hoursBtn'){
            number = Number(event.target.previousElementSibling.value);
            document.querySelector('input[id="days"]').value = number / 24;
            document.querySelector('input[id="minutes"]').value = number * 60;
            document.querySelector('input[id="seconds"]').value = number * 60 * 60;
        } else if (event.target.id == 'minutesBtn'){
            number = Number(event.target.previousElementSibling.value);
            document.querySelector('input[id="days"]').value = number /60 / 24;
            document.querySelector('input[id="hours"]').value = number / 60;
            document.querySelector('input[id="seconds"]').value = number * 60;
        } else if (event.target.id == 'secondsBtn'){
            number = Number(event.target.previousElementSibling.value);
            document.querySelector('input[id="days"]').value = number / 60 / 60 / 24;
            document.querySelector('input[id="hours"]').value = number / 60/ 60;
            document.querySelector('input[id="minutes"]').value = number / 60;
        }
    }
}