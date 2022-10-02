function solve(array) {
    let resultDictionary = {};
    let itemsArray = [];

    for (element of array) {
        let [item, price] = element.split(" : ");
        let keyLetter = item[0];
        itemsArray.push(item);
        if (resultDictionary[keyLetter] == undefined) {
            resultDictionary[keyLetter] = []
        }
        resultDictionary[keyLetter].push({ item, price })
    }

    for (key of Object.keys(resultDictionary).sort((a, b) => a.localeCompare(b))) {
        console.log(key);
        let nestedArrayItems = [];
        for (el of resultDictionary[key]) {
            nestedArrayItems.push(el.item);
        }
        nestedArrayItems = nestedArrayItems.sort((a, b) => a.localeCompare(b))
        for (elem of nestedArrayItems) {
            for (obj of resultDictionary[key]) {
                if (elem == obj.item) {
                    console.log(` ${obj.item}: ${obj.price}`)
                }
            }
        }
    }
}

solve(['Banana : 2',
    'Rubic`s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'])

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])