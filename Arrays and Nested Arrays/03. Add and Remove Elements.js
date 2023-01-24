function solve (array) {
    let num = 0;
    let newArr = [];

    for (command of array) {
        num += 1;

        if (command == 'add') {
            newArr.push(num);
        } else {
            newArr.pop();
        }
    }

    if (newArr.length !== 0) {
        console.log(newArr.join('\n'))
    } else {
        console.log('Empty')
    }
}


solve(['add', 
'add', 
'add', 
'add'])

solve(['add', 
'add', 
'remove', 
'add', 
'add'])

solve(['remove', 
'remove', 
'remove'])