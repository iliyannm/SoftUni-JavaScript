function solve(n , k) {
    let array = [1];
    for (let i = 1; i < n; i++) {
        let someValue = 0;
        if (i < k) {
            for (let j = 0; j < i; j++) {
                someValue += Number(array[j]);
            }
        } else {
            for ( let l = i - k; l < i; l++){
                someValue += Number(array[l]);
            }
        }

        array.push(someValue);
        
        if (i == n - 1){
            return array;
            break;
        }
    }
}
