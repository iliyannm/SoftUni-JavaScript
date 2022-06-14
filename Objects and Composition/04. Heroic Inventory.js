function solve(array) {
    let result = [];

    for (el of array) {
        let [name, level, items] = el.split(' / ');
        level = Number(level);
        items = items ? items.split(', '): [];

        result.push({name, level, items})
    }

    console.log(JSON.stringify(result));
    
}