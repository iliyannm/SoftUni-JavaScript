function solve(array, type) {
    if (type==='asc') {
        return array.sort(function(a, b){return a - b});
    } else if (type=='desc') {
        return array.sort(function(a, b){return b - a});
    }
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));

console.log(solve([14, 7, 17, 6, 8], 'desc'));