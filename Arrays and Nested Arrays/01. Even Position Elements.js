function solve(elements) {
    let result = '';

    for (let i=0; i<elements.length; i+=2) {
        result += `${elements[i]} `;
    }

    console.log(result);
}

solve(['20', '30', '40', '50', '60'])
solve(['5', '10'])