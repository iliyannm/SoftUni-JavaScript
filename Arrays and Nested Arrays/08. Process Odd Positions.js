function solve(array) {
    return array
    .filter((x, i) => i % 2 != 0)
    .map(x => x * 2)
    .reverse()
    .join(' ')
}

console.log(solve([10, 15, 20, 25]))
console.log(solve([3, 0, 10, 4, 7, 3]))