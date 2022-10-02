function solve(array) {
    let result = [];

    for (let i=1; i<array.length; i++) {
        [x, firstCol, secondCol, thirdCol] = array[i].split('|');
        currentTown = firstCol.trim();
        currentLatitude = secondCol.trim();
        currentLongitude = thirdCol.trim();
        result.push({Town: currentTown, Latitude: Number(Number(currentLatitude).toFixed(2)), Longitude: Number(parseFloat(currentLongitude).toFixed(2))});
    }

    console.log(JSON.stringify(result))
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])