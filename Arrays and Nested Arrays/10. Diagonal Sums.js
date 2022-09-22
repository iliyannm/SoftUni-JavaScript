function solve(array) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (r=0; r<array.length; r++){
        firstDiagonal += array[r][r];
        secondDiagonal += array[r][array.length - 1 - r];
    }

    console.log(`${firstDiagonal} ${secondDiagonal}`)
}

solve([[20, 40],
    [10, 60]])

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])