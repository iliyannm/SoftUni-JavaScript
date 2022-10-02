function createSortedList() {
    object = {sortedList:[]}

    let size = object.sortedList.length

    return {
        size: object.sortedList.length,

        add: (el) => {
            object.sortedList.push(el);
            //console.log(size)
            object.sortedList.sort((a, b) => a - b);
            size = object.sortedList.length
            return object.sortedList;
        },

        remove: (index) => {
            if (0 >= index < size) {
                object.sortedList.splice(index, 1);
                size = object.sortedList.length
                return object.sortedList;
            }
        },

        get: (index) => {
            if (0 >= index < size) {
                return object.sortedList[index]
            }
        },

        
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));