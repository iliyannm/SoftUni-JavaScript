function solve(array) {
    let newArr = [];
    array.sort((a, b) => a - b);

    while (array.length != 0) {
        newArr.push(array.shift())
        newArr.push(array.pop())
    };

    return newArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))