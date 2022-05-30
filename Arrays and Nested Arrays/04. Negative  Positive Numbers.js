function solve(array){
    const finalArray = [];
    for (let el of array) {
        if (Number(el) < 0) {
            finalArray.unshift(el);
        } else {
            finalArray.push(el);
        }
    };

    for (let num of finalArray) {
        console.log(num);
    }
}

solve([7, -2, 8, 9])
solve([3, -2, 0, -1])
