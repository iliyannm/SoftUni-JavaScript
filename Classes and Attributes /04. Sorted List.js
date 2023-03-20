class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size = this.list.length;
    }

    remove(index) {
        if (0 <= index && index < this.list.length) {
            this.list.splice(index, 1);
            this.list.sort((a, b) => a - b);
            this.size = this.list.length;
        } else {
            throw new Error('Nice try..')
        }
    }

    get (index) {
        if (0 <= index && index < this.list.length) {
            return this.list[index];
        } else {
            throw new Error('Nice try..')
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));