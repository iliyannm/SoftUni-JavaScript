function aggregateElements(array) {
    const sum = array.reduce(
        (partialSum, a) => 
        partialSum + a, 0);

    const inverseSum = array.reduce(
        (partialSum, a) => 
        partialSum + 1 /a, 0);
    
    const arrOfStr = array.map(num => {
        return String(num);
      });
    
    console.log(sum);
    console.log(inverseSum);
    console.log(arrOfStr.join(''));
}

aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])