function solution(x) {

    function increment(n) {
        return x + n; 
    }

    return increment;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));