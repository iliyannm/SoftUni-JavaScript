function solve(array) {
  let biggestNum;

  for(let  i = 0; i < array.length; i++) {
      let row = array[i];
      for(let j = 0; j < row.length; j++) {
        if (i == 0 && j == 0) {
          biggestNum = array[i][j]
        } else if (array[i][j] > biggestNum) {
              biggestNum = array[i][j];
          };
      }
  }

  return biggestNum;
}


console.log(solve([[20, 50, 10],
    [8, 33, 145]]))

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]))
