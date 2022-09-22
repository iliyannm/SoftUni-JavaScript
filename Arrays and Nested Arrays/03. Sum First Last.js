function solve(someArray) {
    copyOfSomeArray = someArray.slice();

    return Number(someArray.shift()) + Number(copyOfSomeArray.pop());
}

console.log(solve(['20', '30', '40']))
console.log(solve(['5', '10']))
console.log(solve(['5']))