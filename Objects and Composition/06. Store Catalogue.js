function solve(array) {
    let productsList = [];
    let onlyProductNamesList = [];

    for (el of array) {
        [product, price] = el.split(' : ');
        price = Number(price);
        productsList.push({ product, price });
        onlyProductNamesList.push(product);
    };

    onlyProductNamesList.sort((a, b) => a.localeCompare(b));

    for (i = 0; i < onlyProductNamesList.length; i++) {
        if (i == 0) {
            console.log(onlyProductNamesList[i].charAt(0))
        } else {
            if (onlyProductNamesList[i].charAt(0) != onlyProductNamesList[i - 1].charAt(0)) {
                console.log(onlyProductNamesList[i].charAt(0))
            }
        };

        for (obj of productsList) {
            if (obj.product == onlyProductNamesList[i]) {
                console.log(`  ${obj.product}: ${obj.price}`);
            };
        };
    };
};

solve(['Banana : 2',
    'Rubic`s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'])