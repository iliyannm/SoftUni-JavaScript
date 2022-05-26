function validityChecker(x1, y1, x2, y2) {
    let firstCalculation = Math.sqrt(((0 - x1) ** 2) + ((0 - y1) ** 2));
    let secondCalculation = Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2));
    let thirdCalculation = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

    if (Number.isInteger(firstCalculation)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(secondCalculation)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(thirdCalculation)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

validityChecker(3, 0, 0, 4)
validityChecker(2, 1, 1, 1)