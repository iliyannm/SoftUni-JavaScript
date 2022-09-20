function mathFunc(num1, num2, operator) {
    let result;

    switch(operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }

    console.log(result);
}

mathFunc(5, 6, '+')
mathFunc(3, 5.5, '*')