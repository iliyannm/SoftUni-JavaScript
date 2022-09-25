function solve (array) {
    array.sort(sortingFunction)
    console.log(array.join('\n'))

    function sortingFunction(a, b) {
        if (a.length == b.length) {
            return a.localeCompare(b)
        }

        return a.length - b.length 
    }
}

solve(['alpha', 
'beta', 
'gamma'])

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George'])

solve(['test', 
'Deny', 
'omen', 
'Default'])