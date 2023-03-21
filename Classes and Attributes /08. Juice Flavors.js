function solve(arr) {
    class Juice {
        constructor(flavour, quantity) {
            this.flavour = flavour;
            this.quantity = quantity;
        }
    }

    let result = {};
    let orderedArray = [];

    for (let juice of arr) {
        const [fruit, mililiters] = juice.split(' => ');
        if (fruit in result == false) {
            result[fruit] = new Juice(fruit, 0);
        }

        result[fruit].quantity += Number(mililiters);

        if (result[fruit].quantity >= 1000 && orderedArray.includes(result[fruit].flavour) == false) {
            orderedArray.push(result[fruit].flavour);
        }
    }

    for (let j of orderedArray) {
        result[j].quantity /= 1000;
        console.log(`${result[j].flavour} => ${parseInt(result[j].quantity)}`)
    }
}

solve(
    ['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']
)

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)