function solve(arr, rotations) {
    let actualRotations = rotations % arr.length;

    for (let i=0; i <actualRotations; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
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