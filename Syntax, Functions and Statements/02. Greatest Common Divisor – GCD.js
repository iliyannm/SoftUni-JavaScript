function findGreatestDiv(num1, num2) {
    if (num2) {
        return findGreatestDiv(num2, num1 % num2);
    } else {
        console.log(num1)
    }
}

findGreatestDiv(15, 5)
findGreatestDiv(2154, 458)
findGreatestDiv(1561351, 468182)
findGreatestDiv(15613514768613, 165781678353)