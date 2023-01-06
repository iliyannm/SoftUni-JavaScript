function sumNumbers(num1, num2) {
    let finalNum = 0;
    for (let i=Number(num1); i<=Number(num2); i++) {
        finalNum += i;
    }
    console.log(finalNum);
}

sumNumbers('1', '5')
sumNumbers('-8', '20')
