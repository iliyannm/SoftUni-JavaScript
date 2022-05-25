function sumOfNumbers(num1, num2) {

    let firstNum = Number(num1)
    let secondNum = Number(num2)
    let sum = 0

    for (let i = firstNum; i <= secondNum; i++) {
        sum += i
    }

    console.log(sum)
}

sumOfNumbers('1', '5')
sumOfNumbers('-8', '20')