function countTheDays(month, year) {
    let days = new Date(year, month, 0).getDate();
    console.log(days);
}

countTheDays(1, 2012)
countTheDays(2, 2021)