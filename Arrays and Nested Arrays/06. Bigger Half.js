function solve(array) {
    sortedArray = array.sort((a, b) => a -b);

    return sortedArray.slice(Math.floor(array.length / 2), array.length)
}

console.log(solve([4, 7, 2, 5]))
console.log(solve([3, 19, 14, 7, 2, 19, 6]))