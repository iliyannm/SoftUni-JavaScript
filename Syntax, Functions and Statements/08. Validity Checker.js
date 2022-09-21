function validityChecker(x1, y1, x2, y2) {
    firstCaseValid = 'invalid';
    secondCaseValid = 'invalid';
    thirdCaseValid = 'invalid';

    if (Number.isInteger(Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2))) {
        firstCaseValid = 'valid';
    }

    if (Number.isInteger(Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2))) {
        secondCaseValid = 'valid';
    }

    if (Number.isInteger(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2))) {
        thirdCaseValid = 'valid';
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstCaseValid}`)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondCaseValid}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${thirdCaseValid}`)
}

validityChecker(3, 0, 0, 4)
validityChecker(2, 1, 1, 1)