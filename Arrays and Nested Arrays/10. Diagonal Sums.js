function solve (matrix) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for (let i=0; i<matrix.length; i++) {
        leftDiagonal += Number(matrix[i][i]);
        rightDiagonal += Number(matrix[i][matrix.length - i - 1]);
    }

    console.log(`${leftDiagonal} ${rightDiagonal}`);
}

solve([[20, 40],
    [10, 60]])

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])