function printRectangle(param) {
    if (param == null) {
        for (let i = 1; i <= 5; i++) {
            console.log(`* `.repeat(5))
        }
    }
    else {
        for (let i = 1; i <= param; i++) {
            console.log(`* `.repeat(param))
        }
    }
}
