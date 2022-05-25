function commonDivisor(num1, num2) {
    let greatestDivisor
    for (let i = 1; i <= num2; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            greatestDivisor = i
        }
    }

    console.log(greatestDivisor)
}
