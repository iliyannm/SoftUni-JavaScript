function checkNumbers(number) {
    let numberAsString = number.toString()
    let isTheSame = true;
    let fullSum = 0;

    for (let i=0; i<(numberAsString.length - 1); i++) {
        fullSum += parseInt(numberAsString[i]);
        if (numberAsString[i] != numberAsString[i+1]){
            isTheSame = false;        
        } 
    }
    fullSum += parseInt(numberAsString[numberAsString.length - 1]);

    console.log(isTheSame);
    console.log(fullSum);
}

checkNumbers(2222222)
checkNumbers(1234)