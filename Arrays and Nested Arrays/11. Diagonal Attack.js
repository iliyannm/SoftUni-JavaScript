function solve(array) {
    let matrix = array.map(function(x, i, array) {return x.split(' ')})
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let equalDiagonals = false;

    for (r=0; r<matrix.length; r++) {
        leftDiagonal += Number(matrix[r][r]);
        rightDiagonal += Number(matrix[r][matrix.length -r - 1]);
    }
    
    if (leftDiagonal == rightDiagonal) {
        equalDiagonals = true;
    }

    if (equalDiagonals == true) {
        for (let row=0; row<matrix.length; row++){
            for (let col=0; col<matrix.length; col++){
                if (row == col || row == (matrix.length - col - 1)) {
                    continue;
                } else {
                    matrix[row][col] = leftDiagonal;
                }
            }
        }
    }

    for (x of matrix) {
        console.log(x.join(' '))
    }
}



solve(
    ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)