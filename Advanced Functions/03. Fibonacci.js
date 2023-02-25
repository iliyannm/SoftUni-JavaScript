function getFibonator() {
    return (function() {
        if (this.curr == 0){
            this.curr = 1;
            return 1;
        }
        const next = this.prev + this.curr;
        this.prev = this.curr;
        this.curr = next;

        return this.curr;
    }).bind({
        prev:0,
        curr:0
    });
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13