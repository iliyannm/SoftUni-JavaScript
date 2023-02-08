function encodeAndDecodeMessages() {
    let initialText;
    let initialList;
    let codedList;
    let codedText;
    let encodingArea = document.getElementsByTagName('textarea')[0];
    let decodingArea = document.getElementsByTagName('textarea')[1];
    [...document.getElementsByTagName('button')].forEach(
        b => b.addEventListener(
            'click', encodeOrDecode
        )
    );

    function encodeOrDecode(event) {
        if (event.target.textContent == 'Encode and send it') {
            initialText = encodingArea.value;
            initialList = Array.from(initialText);
            codedList = initialList.map(x => x.charCodeAt(0) + 1);
            codedText = codedList.map(y => String.fromCharCode(y)).join('');
            decodingArea.value = codedText;
            encodingArea.value = '';
        } else {
            decodingArea.value = initialText;
        }
    }
}