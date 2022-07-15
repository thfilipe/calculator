const totalText = document.querySelector('#total');
const calculateText = document.querySelector('#calculate');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('#equals');
const allClearButton = document.querySelector('#all-clear');
const backButton = document.querySelector('#back');


let totalOperand = '';
let calculateOperand = '';
let operation = null;

function handleButtons() {
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === "." && calculateOperand.includes('.')) return;
            calculateOperand += button.textContent;
            updateDisplay();
        })

    })
}

function updateDisplay() {
    calculateText.textContent = calculateOperand;
}

handleButtons()

function allClear() {
    calculateText.textContent = '';
    totalText.textContent = '';
    totalOperand = '';
    calculateOperand = '';
}

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function power(num, power) {
    return Math.pow(num, power);
};

function divide(num1, num2) {
    return num1 / num2;
}





