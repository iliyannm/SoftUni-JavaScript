function solve(arr) {
    const dict = {};

    for (let el of arr) {
        [city, population] = el.split(' <-> ');

        if (dict[city] == undefined) {
            dict[city] = 0
        };

        dict[city] += Number(population);
    }

    for (c in dict) {
        console.log(`${c} : ${dict[c]}`)
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])