function colorize() {
    let elemList = Array.from(document.getElementsByTagName('tr'));

    for (let i=1; i <elemList.length; i+=2) {
        elemList[i].style.background = 'teal';
    }
}