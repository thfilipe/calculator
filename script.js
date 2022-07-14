const buttons = document.getElementById('buttons');

function operate(operator, num1, num2) {

}

function add(num1, num2) {
    return num1 + num2
};

function subtract(num1, num2) {
    return num1 - num2
};

function multiply(num1, num2) {
    return num1 * num2
};

function power(num, power) {
    return Math.pow(num, power)
};

function sum(num) {
    if (num.length === 0) {
        return 0;
    }
    return num.reduce((acc, curr) => acc + curr)
};

function divide(num1, num2) {
    return num1 / num2
}

function factorial(fact) {

    if (fact == 0 || fact == 1) {
        return 1;
    }
    let sum = 1
    for (i = 1; i < fact; i++) {
        sum = sum * (i + 1);
    }
    return sum
};



