function checkNumbers(number) {
    number = String(number);
    let sum = Number(number[0]);
    let different = true;

    for (let i=1; i < number.length; i++) {
        sum += Number(number[i]);
        if (number[i] != number[i - 1]) {
            different = false;
        }
    }

    console.log(different)
    console.log(sum)
}

checkNumbers(2222222)
checkNumbers(1234)