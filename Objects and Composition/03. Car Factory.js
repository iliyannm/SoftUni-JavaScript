function solve (car) {
    let completeCar = {};
    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };

    completeCar.model = car.model;

    if (car.power <= 90) {
        completeCar.engine = smallEngine;
    } else if (car.power <= 120) {
        completeCar.engine = normalEngine;
    } else {
        completeCar.engine = monsterEngine;
    }

    completeCar.carriage = {
        'type': car.carriage,
        'color': car.color
    };

    if (car.wheelsize % 2 ==0) {
        car.wheelsize -= 1;
    }

    completeCar.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize]

    return completeCar;
}


console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}))

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}))