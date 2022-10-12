function subtract() {
    let firstValue = Number(document.getElementById('firstNumber').value);
    let secondValue = Number(document.getElementById('secondNumber').value);

    document.getElementById('result').textContent = firstValue - secondValue;
}