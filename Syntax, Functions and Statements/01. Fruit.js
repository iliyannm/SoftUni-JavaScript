function calculateMoney(fruit, grams, pricePerKg) {
    let weightInKg = (grams / 1000)
    let fullAmountMoney = (weightInKg * pricePerKg)

    console.log(`I need $${fullAmountMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}
