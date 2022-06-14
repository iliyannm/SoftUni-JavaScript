function solve(array) {
    let products = [];
    let isFound = false;

    for (el of array) {
        let [town, product, price] = el.split(' | ');
        price = Number(price)

        for (obj of products) {
            if (obj.product == product) {
                isFound = true;
                if (price < obj.price) {
                    obj.price = price;
                    obj.town = town;
                };
            };
        };

        if (isFound == true) {
            isFound = false;
        } else {
            products.push({ product, price, town });
        };


    };

    for (p of products) {
        console.log(`${p.product} -> ${p.price} (${p.town})`)
    };
};

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])