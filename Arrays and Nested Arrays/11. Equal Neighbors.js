function solve(matrix) {
    let matches = 0;

    for (r = 0; r < matrix.length; r++) {
        for (c = 0; c < matrix[r].length; c++) {
            if (r + 1 < matrix.length) {
                if (matrix[r][c] === matrix[r + 1][c]) {
                    matches += 1;
                }
            };
            if (c + 1 < matrix[r].length) {
                if (matrix[r][c] === matrix[r][c + 1]) {
                    matches += 1;
                    }
                }
            }
        }

    return matches
}

console.log(solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]))

console.log(solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]))

console.log(solve([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]))