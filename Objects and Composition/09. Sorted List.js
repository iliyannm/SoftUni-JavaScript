function createSortedList() {
    const object = {
        listOfNums: []
    }

    const result = {
        
        add(param) {
            object.listOfNums.push(param);
            object.listOfNums.sort((a, b) => a - b)
        },

        remove(index) {
            if (object.listOfNums.length > 0) {
                if (0 <= index < object.listOfNums.length) {
                    object.listOfNums.splice(index, 1);
                    object.listOfNums.sort((a, b) => a - b)
                };
            }
        },

        get(index) {
            return object.listOfNums[index];
        },
        
        size: object.listOfNums.length
    };

    return result;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
list.add(8);
list.add(9);
list.add(10);
console.log(list.get(1));
console.log(list.get(3));
console.log(list.get(5));
list.remove(1);
list.remove(1);
list.remove(1);
list.remove(1);
console.log(list.get(1));

