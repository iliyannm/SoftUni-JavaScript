function solve(arr) {
    let initialNum = arr[0];
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= initialNum) {
            initialNum = arr[i];
            newArr.push(initialNum);
        }
    }

    return newArr
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))


console.log(solve([1,
    2,
    3,
    4]))


console.log(solve([20,
    3,
    2,
    15,
    6,
    1]))