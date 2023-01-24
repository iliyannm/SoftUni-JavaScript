function solve(array) {
    return Number(array.pop()) + Number(array.shift())
}

console.log(solve(['20', '30', '40']))
console.log(solve(['5', '10']))