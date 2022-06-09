function solve (arr) {
    let biggestNum = arr[0];
    let newArr = [];

    for (let index = 0; index < arr.length; index++) {
        let currentNum = arr[index]
        if (currentNum >= biggestNum) {
            newArr.push(currentNum);
            biggestNum = currentNum;
        };
    };

    return newArr;
}