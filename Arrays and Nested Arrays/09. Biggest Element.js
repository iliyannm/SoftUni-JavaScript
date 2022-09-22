function solve(array) {
    let biggestValue = array[0][0];

    for (r=0; r<array.length; r++){
        for (c=0; c<array[r].length; c++) {
            if (array[r][c] > biggestValue) {
                biggestValue = array[r][c];
            } 
        }
    }

    return biggestValue;
}


console.log(solve([[20, 50, 10],
    [8, 33, 145]]))

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]))
