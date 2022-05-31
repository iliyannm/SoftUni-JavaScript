function solve(array) {
    const matrixOfNumbers = [];
    let mainDiagonal = 0 ;
    let secondaryDiagonal = 0;

    for (row of array) {
        let rowOfNums = row.map(str => {return Number(str)});
        matrixOfNumbers.push(rowOfNums)
    };
    
    for (let i = 0; i < matrixOfNumbers.length; i++) {
        mainDiagonal += matrixOfNumbers[i][i];
    };

    for (let j = 0; j < matrixOfNumbers.length; j++) {
        secondaryDiagonal += matrixOfNumbers[j][matrixOfNumbers.length - j - 1];
    };

    console.log(`${mainDiagonal} ${secondaryDiagonal}`);
}

solve([[20, 40],
    [10, 60]])

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])