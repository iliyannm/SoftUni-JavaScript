function solve (array) {
    const result = [];

    const firstMin = Math.min(...array);
    result.push(firstMin);
    const firstIndex = array.indexOf(firstMin);
    array.splice(firstIndex, 1);

    const secondMin = Math.min(...array);
    result.push(secondMin);
    const secondIndex = array.indexOf(secondMin);
    array.splice(secondIndex, 1);

    console.log(result.join(' '))
}
