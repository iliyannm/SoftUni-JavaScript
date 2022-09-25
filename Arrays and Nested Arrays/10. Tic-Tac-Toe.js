function solve(moves) {
    matrix = [[false, false, false],
    [false, false, false],
    [false, false, false]]
    let row;
    let col;
    let convertedElement;
    let counter = 0;
    let player;
    let somebodyWon;
    let nobodyWins;

    for (el of moves) {
        nobodyWins = true;
        counter += 1;
        convertedElement = el.split(' ');
        row = Number(convertedElement[0]);
        col = Number(convertedElement[1]);
        
        if (counter % 2 == 0) {
            player = 'O';
        } else {
            player = 'X';
        }

        if (matrix[row][col] == false) {
            matrix[row][col] = player;
        } else {
            counter += 1;
            console.log("This place is already taken. Please choose another!")
        }

        for (let x=0; x<matrix.length; x++) {
            somebodyWon = true;
            for (let y=1; y<matrix.length; y++) {
                if (matrix[x][y] != matrix[x][y-1] || matrix[x][y] == false){
                    somebodyWon = false;
                    break;
                }
            }
            if (somebodyWon) {
                console.log(`Player ${player} wins!`)
                break;
            }
        }

        if (somebodyWon) {
            break;
        }

        for (let c=0; c<matrix.length; c++) {
            somebodyWon = true;
            for (let r=1; r<matrix.length; r++) {
                if (matrix[r][c] != matrix[r - 1][c] || matrix[r][c] == false){
                    somebodyWon = false;
                    break;
                }
            }
            if (somebodyWon) {
                console.log(`Player ${player} wins!`)
                break;
            }
        }

        if (somebodyWon) {
            break;
        }

        for (let l=1; l<matrix.length; l++) {
            somebodyWon = true;
            if (matrix[l-1][l-1] != matrix[l][l] || matrix[l][l] == false){
                somebodyWon = false;
                    break;
            }
        }

        if (somebodyWon) {
            console.log(`Player ${player} wins!`)
            break;
        }

        for (let d=1; d<matrix.length; d++) {
            somebodyWon = true;
            if (matrix[d-1][matrix.length - d] != matrix[d][matrix.length - d - 1] || matrix[d-1][matrix.length - d] == false){
                somebodyWon = false;
                    break;
            }
        }

        if (somebodyWon) {
            console.log(`Player ${player} wins!`)
            break;
        }

        for (let eachRow=0; eachRow<matrix.length; eachRow++){
            for (let eachCol=0; eachCol<matrix.length; eachCol++){
                if (matrix[eachRow][eachCol] == false) {
                    nobodyWins = false;
                    break;
                }
            }
            if (nobodyWins == false){
                break
            }
        }

        if (nobodyWins == true) {
            console.log('The game ended! Nobody wins :(');
            break;
        }
    }

    for (let ro=0; ro<matrix.length; ro++) {
        console.log(matrix[ro].join("\t"))
    }
}

solve(
    ["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
)