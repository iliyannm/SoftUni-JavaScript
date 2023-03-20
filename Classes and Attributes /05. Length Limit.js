class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.inngerLength = length;
    }

    increase(num) {
        this.inngerLength += num;
    }

    decrease(num) {
        if (this.inngerLength - num < 0) {
            this.inngerLength = 0;
        } else {
            this.inngerLength -= num;
        }
    }

    toString() {
        if (this.inngerLength < this.innerString.length) {
            return this.innerString.substring(0, this.inngerLength) + '...'
        } else {
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test