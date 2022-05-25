function circleArea(param) {
    let result

    if (Number.isInteger(param)) {
        result = (param ** 2) * Math.PI 
        console.log(result.toFixed(2))
    }
    else {
        result = (typeof param)
        console.log(`We can not calculate the circle area, because we receive a ${result}.`)
    }
}

circleArea(5)
circleArea('name')