function findGreatestDiv(num1, num2) {
    let divisor;

    for (let i=0; i<=num1 && i<=num2; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            divisor = i;
        }
    }

    console.log(divisor)
}

findGreatestDiv(15, 5)
findGreatestDiv(2154, 458)
findGreatestDiv(1561351, 468182)
findGreatestDiv(15613514768613, 165781678353)