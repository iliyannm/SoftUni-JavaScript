function mathFunc(num1, num2, operator) {
    switch (operator) {
        case '+': console.log(num1 + num2); break;
        case '-': console.log(num1 - num2); break;
        case '*': console.log(num1 * num2); break;
        case '/': console.log(num1 / num2); break;
        case '%': console.log(num1 % num2); break;
        case '**': console.log(num1 ** num2); break;
    }
}

mathFunc(5, 6, '+')
mathFunc(3, 5.5, '*')