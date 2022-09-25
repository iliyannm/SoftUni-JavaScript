function solve(matrix) {
    let arrayValues = [];
    let rowValue;
    let colValue;

    for (let x = 0; x < matrix.length; x++) {
        rowValue = 0;
        colValue = 0;
        for (let y = 0; y < matrix.length; y++) {
            rowValue += matrix[x][y];
            colValue += matrix[y][x];
        }
        arrayValues.push(rowValue);
        arrayValues.push(colValue);
    }

    for (el of arrayValues) {
        for (let i=0; i<arrayValues.length; i++) {
            if (el !== arrayValues[i]) {
                return false
            }
        }
    }
    return true
}


console.log(solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]))

console.log(solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]))

console.log(solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]))