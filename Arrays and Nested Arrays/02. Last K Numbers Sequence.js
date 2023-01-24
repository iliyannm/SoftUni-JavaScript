function solve(n, k) {
    let result = [1];
    let currentNum = 0;

    for (let i=1; i<n; i++) {
        if (i-k > 0) {
            for (let y = i-k; y<i; y++) {
                currentNum += result[y];
            }
        } else {
            for (let x=0; x<i; x++) {
                currentNum += result[x];
            }
        }
        result.push(currentNum);
        currentNum = 0;
    }

    return result;
}

console.log(solve(6, 3))
console.log(solve(8, 2))