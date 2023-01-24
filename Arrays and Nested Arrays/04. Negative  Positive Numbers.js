function solve(array) {
    let result = [];

    for (el of array) {
        if (el >= 0) {
            result.push(el);
        } else {
            result.unshift(el);
        }
    }

    console.log(result);
}

solve([7, -2, 8, 9])
solve([3, -2, 0, -1])