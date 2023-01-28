function solve(array) {
    let cityDict = {};

    for (let str of array) {
        [city, population] = str.split(' <-> ');
        if (cityDict[city] == undefined) {
            cityDict[city] = 0;
        }
        cityDict[city] += Number(population);
    }

    for (let key in cityDict) {
        console.log(`${key} : ${cityDict[key]}`)
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])