function solve (array, num) {
    for (let i=0; i<num; i++ ) {
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}



solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)

solve(['1', 
'2', 
'3', 
'4'], 
2)