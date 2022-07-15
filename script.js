const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const totalButton = document.querySelector('[data-total]');
const calculationButton = document.querySelector('[data-calculation]');

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





