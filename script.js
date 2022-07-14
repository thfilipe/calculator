const numberButtons = document.getElementsByClassName('number');
const operationButtons = document.getElementsByClassName('operation');
const equalsButton = document.getElementById('equals');
const allClearButton = document.getElementById('all-clear');
const backButton = document.getElementById('back');
const totalButton = document.getElementById('total');
const calculationButton = document.getElementById('calculation');

numberButtons.forEach(number => {
    console.log(number)
})

function press() {
    calculationButton.textContent += "test";
}
function allClear() {
    calculationButton.textContent = "";
    totalButton.textContent = "";
}

function operate(operator, num1, num2) {

};

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

function divide(num1, num2) {
    return num1 / num2
}





