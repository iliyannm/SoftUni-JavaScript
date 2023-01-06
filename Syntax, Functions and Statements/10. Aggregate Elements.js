function aggregateElements(array) {
    let sum = 0;
    let inverseSum = 0;
    let arrayAsOneNumber = '';

    array.forEach(item => {
        sum += item;
      });

    array.forEach(item => {
        inverseSum += 1 / item;
      });

    array.forEach(item => {
        arrayAsOneNumber += String(item);
    })

    console.log(sum)
    console.log(inverseSum)
    console.log(arrayAsOneNumber)
}

aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])