function solve(arr) {
    let matrix = [];
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (el of arr) {
        matrix.push(el.split(' '));
    }

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += Number(matrix[i][i]);
        secondDiagonal += Number(matrix[i][matrix.length - i - 1]);
    }

    if (firstDiagonal == secondDiagonal) {
        for (let j = 0; j < matrix.length; j++) {
            for (let k = 0; k < matrix[j].length; k++) {
                if (j != k && (matrix[j].length - j - 1) != k) {
                    matrix[j][k] = firstDiagonal;
                };
            }
        }
    };

    for (row of matrix) {
        console.log(row.join(' '))
    };

}

solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1'])
