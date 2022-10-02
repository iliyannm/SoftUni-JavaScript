function solve(array) {
    let result = {};

    for (let element of array) {
        let [town, product, price] = element.split(' | ');
        if (result[product] == undefined) {
            result[product] = { price: Number(price), town };
        } else {
            if (Number(price) < result[product].price) {
                result[product].price = price;
                result[product].town = town;
            }
        }
    }

    for (key of Object.keys(result)) {
        console.log(`${key} -> ${result[key].price} (${result[key].town})`)
    }
}

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'])