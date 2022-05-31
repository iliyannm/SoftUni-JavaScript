function solve(matrix) {
    let neighbourPairs = [];

    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++) {
            if (i - 1 >= 0){
                if (matrix[i- 1][j] == matrix[i][j]){
                    if (neighbourPairs.includes(`${i- 1}${j}-${i}${j}`)){
                        //pass;
                    } else {
                    neighbourPairs.push(`${i}${j}-${i- 1}${j}`)
                };
            };
        };

            if (j - 1 >= 0){
                if (matrix[i][j -1] == matrix[i][j]){
                    if (neighbourPairs.includes(`${i}${j -1}-${i}${j}`)){
                        //pass;
                    } else {
                    neighbourPairs.push(`${i}${j}-${i}${j -1}`)
                };
            };
        };
            if (j + 1 < matrix[i].length){
                if (matrix[i][j +1] == matrix[i][j]){
                    if (neighbourPairs.includes(`${i}${j +1}-${i}${j}`)){
                        //pass;
                    } else {
                    neighbourPairs.push(`${i}${j}-${i}${j +1}`)
                };
            };
        };

            if (i + 1 < matrix.length ){
                if (matrix[i + 1][j] == matrix[i][j]){
                    if (neighbourPairs.includes(`${i + 1}${j}-${i}${j}`)){
                        //pass;
                    } else {
                    neighbourPairs.push(`${i}${j}-${i + 1}${j}`)
                };
            };
        };

};

        };

        return (`${neighbourPairs.length}`)

    };

console.log(solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]))