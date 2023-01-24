function solve(array) {
    let biggest = array[0][0];

    for (let arr of array) {
        if (Math.max(...arr) > biggest) {
            biggest = Math.max(...arr);
        }
    }

    return biggest;
}


console.log(solve([[20, 50, 10],
    [8, 33, 145]]))

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]))
