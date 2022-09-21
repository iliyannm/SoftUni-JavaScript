function calculateMoney(fruit, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000;

    console.log(`I need $${(weightInKg * pricePerKg).toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

calculateMoney('orange', 2500, 1.80)
calculateMoney('apple', 1563, 2.35)