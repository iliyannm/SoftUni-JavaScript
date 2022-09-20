function countTheDays(month, year) {
    let result = new Date(year, month, 0).getDate();

    console.log(result);
}

countTheDays(1, 2012)
countTheDays(2, 2021)