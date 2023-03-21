function solve(arr) {
    class Car {
        constructor(model, quantity) {
            this.model = model;
            this.quantity = quantity;
        }
    }

    const cars = {};

    for (let car of arr) {
        let [carBrand, carModel, carsQuantity] = car.split(' | ');
        if (carBrand in cars === false) {
            cars[carBrand] = [];
            cars[carBrand].push(new Car(carModel, Number(carsQuantity)));
        } else {
            for (let currentModel of cars[carBrand]) {
                if (carModel === currentModel.model) {
                    currentModel.quantity += Number(carsQuantity);
                    break;
                }
            }
            cars[carBrand].push(new Car(carModel, Number(carsQuantity)));
        }
    }

    return cars;
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])