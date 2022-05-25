function checkNumber(num) {
    let numberAsString = num.toString();
    let isTheSame = true
    let fullSum = 0

    for (let i = 1; i <= numberAsString.length; i++) {
        if (i == numberAsString.length){
            fullSum += Number(numberAsString[i -1])
            break;
        }
        if (numberAsString[i] != numberAsString[i - 1]) {
            isTheSame = false
        }
        
        fullSum += Number(numberAsString[i - 1])
      }

    console.log(isTheSame)
    console.log(fullSum)
}
