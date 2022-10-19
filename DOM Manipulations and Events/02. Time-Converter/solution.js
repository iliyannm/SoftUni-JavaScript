function attachEventsListeners() {
    let main = document.querySelector('main');
    let elements = document.querySelectorAll('div input');
    let input = 0;
    main.addEventListener('click', convertData);


    function convertData(event) {
        if (event.target.id == 'daysBtn') {
            input = Number(elements[0].value);
            elements[2].value = input * 24;
            elements[4].value = input * 24 * 60;
            elements[6].value = input * 24 * 60 * 60;
        } else if (event.target.id == 'hoursBtn') {
            input = elements[2].value;
            elements[0].value = input / 24;
            elements[4].value = input * 60;
            elements[6].value = input * 60 * 60;
        } else if (event.target.id == 'minutesBtn') {
            input = elements[4].value;
            elements[0].value = input / 60 / 24;
            elements[2].value = input / 60;
            elements[6].value = input * 60;
        } else if (event.target.id == 'secondsBtn') {
            input = elements[6].value;
            elements[0].value = input / 60 / 60 / 24;
            elements[2].value = input / 60 / 60;
            elements[4].value = input / 60;
        }
    }
}