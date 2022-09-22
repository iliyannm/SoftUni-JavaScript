function solve(array) {
    let result = [];
    let smallestValue;
    let index;
    
    for (let i=0; i<2; i++) {
        smallestValue = Math.min(...array);
        result.push(smallestValue)
        index = array.indexOf(smallestValue);
        array.splice(index, 1);
    }
    
    console.log(result.join(' '))
}

solve([30, 15, 50, 5])
solve([3, 0, 10, 4, 7, 3])