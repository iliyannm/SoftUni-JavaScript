function solve(array) {
    let result = [];

    for (let el of array) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }

    console.log(result.join('\n'));
}

solve([7, -2, 8, 9])
solve([3, -2, 0, -1])