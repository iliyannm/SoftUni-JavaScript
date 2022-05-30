function solve (array) {
    const finalArray = []
    for (i = 0; i < array.length; i += 2){
        finalArray.push(array[i])
    }

    console.log(finalArray.join(' '))
}

solve(['20', '30', '40', '50', '60'])
solve(['5', '10'])