function solve(array) {
    let result = [];

    for (let element of array) {
        let currentHero = {};
        let [name, level, items] = element.split(' / ');
        currentHero['name'] = name;
        currentHero['level'] = Number(level);
        currentHero['items'] = []

        if (items != undefined) {
            for (item of items.split(', ')) {
                currentHero['items'].push(item)
            }
        }

        result.push(currentHero);
    }
    console.log(JSON.stringify(result));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])

solve(['Jake / 1000 / Gauss, HolidayGrenade'])