function solve (matrix) {
    let matches = 0;

    for (let i=0; i<matrix.length; i++) {
        for (let y=0; y<matrix[i].length; y++) {
            if (y + 1 != matrix[i].length) {
                if (matrix[i][y] == matrix[i][y+1]) {
                    matches ++;
                }
            }
            if (i+1 != matrix.length){
                if (matrix[i][y] == matrix[i+1][y]) {
                    matches ++;
                }
            }   
        }        
    }

    return matches;
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