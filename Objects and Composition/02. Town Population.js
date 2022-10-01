function solve(array) {
    let result = {};

    for (let element of array) {
        [city, pop] = element.split(' <-> ')
        if (result[city] == undefined) {
            result[city] = 0
        }
        result[city] += Number(pop);
    }

    for (let key in result) {
        console.log(`${key} : ${result[key]}`)
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