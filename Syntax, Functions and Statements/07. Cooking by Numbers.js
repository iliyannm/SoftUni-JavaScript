function cookTheNumbers(num, oper1, oper2, oper3, oper4, oper5) {
    let lastNumber = Number(num);
    let operationsArray = [oper1, oper2, oper3, oper4, oper5]

    for (x of operationsArray){
        if (x == 'chop'){
            lastNumber /= 2
            console.log(lastNumber)
        }
        else if (x == 'dice'){
            lastNumber = Math.sqrt(lastNumber)
            console.log(lastNumber)
        }
        else if (x == 'spice'){
            lastNumber += 1
            console.log(lastNumber)
        }
        else if (x == 'bake'){
            lastNumber *= 3
            console.log(lastNumber)
        }
        else if (x == 'fillet'){
            lastNumber = (lastNumber * 0.80).toFixed(1)
            console.log(lastNumber)
        }    
    }
}

cookTheNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookTheNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')