function solve(arr) {
    let row;
    let col;
    let isThereWinner = false;
    let index = 0;
    let moves = 0;

    matrix = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    while (arr.length != 0) {
        let currentValue = arr.shift();
        row = currentValue[0];
        col = currentValue[2];

        if (index % 2 == 0) {
            if (matrix[row][col] == 'X' || matrix[row][col] == 'O') {
                console.log('This place is already taken. Please choose another!');
                index += 1;
            };

            if (matrix[row][col] == false) {
                matrix[row][col] = 'X';
                moves += 1;
            };

        } else {
            if (matrix[row][col] == 'X' || matrix[row][col] == 'O') {
                console.log('This place is already taken. Please choose another!');
                index += 1;
            };

            if (matrix[row][col] == false) {
                matrix[row][col] = 'O';
                moves += 1;
            };
        };

        if (matrix[0][0] != false) {
            if (matrix[0][0] == matrix[0][1] && matrix[0][0] == matrix[0][2]) {
                if (matrix[0][0] == 'X') {
                    console.log('Player X wins!');
                    isThereWinner = true;
                } else {
                    console.log('Player O wins!');
                    isThereWinner = true;
                };
            } else if (matrix[0][0] == matrix[1][1] && matrix[0][0] == matrix[2][2]) {
                if (matrix[0][0] == 'X') {
                    console.log('Player X wins!');
                    isThereWinner = true;
                } else {
                    console.log('Player O wins!');
                    isThereWinner = true;
                };
            } else if (matrix[0][0] == matrix[1][0] && matrix[0][0] == matrix[2][0]) {
                if (matrix[0][0] == 'X') {
                    console.log('Player X wins!');
                    isThereWinner = true;
                } else {
                    console.log('Player O wins!');
                    isThereWinner = true;
                };
            };
        } else if (matrix[1][0] != false) {
            if (matrix[1][0] == matrix[1][1] && matrix[0][0] == matrix[1][2]) {
                if (matrix[1][0] == 'X') {
                    console.log('Player X wins!');
                    isThereWinner = true;
                } else {
                    console.log('Player O wins!');
                    isThereWinner = true;
                };
            };
        } else if (matrix[2][0] != false) {
            if (matrix[2][0] == matrix[2][1] && matrix[0][0] == matrix[2][2]) {
                if (matrix[2][0] == 'X') {
                    console.log('Player X wins!');
                    isThereWinner = true;
                } else {
                    console.log('Player O wins!');
                    isThereWinner = true;
                };
            } else if (matrix[2][0] == matrix[1][1] && matrix[2][0] == matrix[0][2]) {
                if (matrix[2][0] == 'X') {
                    console.log('Player X wins!');
                    isThereWinner = true;
                } else {
                    console.log('Player O wins!');
                    isThereWinner = true;
                };
            };
        } else if (matrix[0][1] != false){
            if (matrix[0][1] == matrix[1][1] && matrix[0][1] == matrix[2][1]) {
                if (matrix[0][1] == 'X') {
                    console.log('Player X wins!');
                    isThereWinner = true;
                } else {
                    console.log('Player O wins!');
                    isThereWinner = true;
                };
            };
        } else if (matrix[0][2] != false){
            if (matrix[0][2] == matrix[1][2] && matrix[0][2] == matrix[2][2]) {
                if (matrix[0][2] == 'X') {
                    console.log('Player X wins!');
                    isThereWinner = true;
                } else {
                    console.log('Player O wins!');
                    isThereWinner = true;
                };
            };
        };

        if (isThereWinner == true){
            break;
        };

        if (moves == 9){
            break;
        };

        index += 1;
    };

    if (isThereWinner == false){
        console.log('The game ended! Nobody wins :(')
    }

    for (let j = 0; j < matrix.length; j++) {
        console.log(matrix[j].join('\t'))
    }
}

solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"])
