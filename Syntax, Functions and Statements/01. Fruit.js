function calculateMoney(fruit, weightInGrams, pricePerKg) {
    console.log(`I need $${((weightInGrams / 1000) * pricePerKg).toFixed(2)} to buy ${(weightInGrams / 1000).toFixed(2)} kilograms ${fruit}.`);
}

calculateMoney('orange', 2500, 1.80)
calculateMoney('apple', 1563, 2.35)