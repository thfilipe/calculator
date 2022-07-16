const totalText = document.querySelector('#total');
const calculateText = document.querySelector('#calculate');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('#equals');
const allClearButton = document.querySelector('#all-clear');
const backButton = document.querySelector('#back');


let calculateOperand = '';
let totalOperand = '';
let operation = null;

function handleButtons() {
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === "." && calculateOperand.includes('.')) return;
            calculateOperand += button.textContent;
            updateDisplay();
        })

    })
    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (calculateOperand === '') return;
            if (button.textContent === "." && calculateOperand.includes('.')) return;
            operation = button.textContent;
            operate();
            updateDisplay();
        })
    })
}

handleButtons()

function updateDisplay() {
    calculateText.textContent = calculateOperand;
    totalText.textContent = totalOperand;
}



function operate() {
    if (calculateOperand === '') return;
    if (totalOperand !== '') {
        result()
    };

    totalOperand = `${calculateOperand} ${operation}`
    calculateOperand = '';
}
backspace()
function backspace() {
    backButton.addEventListener('click', () => {
        calculateOperand = calculateOperand.slice(0, -1)
        updateDisplay()
    })
}
function allClear() {
    totalOperand = '';
    calculateOperand = '';
    operation = null;
    updateDisplay()
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





