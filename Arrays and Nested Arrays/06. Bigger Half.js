function solve(array) {
    array.sort((a, b) => a - b);
    let middleIndex = Math.floor(array.length / 2);
    let rest = array.splice(middleIndex);
    
    return rest;
}

console.log(solve([4, 7, 2, 5]))
console.log(solve([3, 19, 14, 7, 2, 19, 6]))