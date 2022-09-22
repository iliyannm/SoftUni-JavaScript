function solve(n, k) {
    let finalArray = [1];
    let currentValue;

    for (let i=1; i<n; i++) {
        currentValue = 0;
        if ((i - k) < 0) {
            for (let j=0; j<i; j++) {
                currentValue += finalArray[j];
            }
            finalArray.push(currentValue);
        } else {
            for (let j=i-k; j<i; j++) {
                currentValue += finalArray[j];
            }
            finalArray.push(currentValue);
        } 
    }

    return finalArray;
}

console.log(solve(6, 3))
console.log(solve(8, 2))