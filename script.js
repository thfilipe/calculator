const totalText = document.querySelector('#total');
const calculateText = document.querySelector('#calculate');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('#equals');
const allClearButton = document.querySelector('#all-clear');
const backButton = document.querySelector('#back');


let calculateOperand = '';
let totalOperand = '';
let operation = null;

function handleButtons() {

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculateOperand === '0' ? calculateOperand = "" : '';
            calculateOperand = calculateOperand.toString();
            if (button.textContent === "." && calculateOperand.includes('.')) return;
            calculateOperand += button.textContent.toString();
            updateDisplay();
        })

    })
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (calculateOperand === '') return;
            if (button.textContent === "." && calculateOperand.includes('.')) return;
            operation = button.textContent;
            operate();
            updateDisplay();
        })
    })
    equals()
    backspace()
    allClear()
}

handleButtons()


function updateDisplay() {
    calculateText.textContent = calculateOperand;
    totalText.textContent = totalOperand;
}



function operate() {
    if (calculateOperand === '') return;
    if (totalOperand !== '') {
        calculateResult()
    };
    totalOperand = `${calculateOperand}${operation}`
    calculateOperand = '';
}

function backspace() {

    backButton.addEventListener('click', () => {

        if (calculateOperand.length === 1) {
            calculateOperand = '0';

        } else {
            calculateOperand = calculateOperand.toString().slice(0, -1);
        }

        updateDisplay()
    })

}

function equals() {
    equalsButton.addEventListener('click', () => {
        calculateResult()
        updateDisplay()
    })
}
function allClear() {
    allClearButton.addEventListener('click', () => {
        totalOperand = '';
        operation = null;
        calculateOperand = '0';
        updateDisplay()

    })

}

function calculateResult() {
    let calculate = parseFloat(calculateOperand);
    let total = parseFloat(totalOperand);
    let results;
    if (isNaN(calculate) || isNaN(total)) return;
    operation === '+' ? results = add(total, calculate)
        : operation === '-' ? results = subtract(total, calculate)
            : operation === 'x' ? results = multiply(total, calculate)
                : operation === '÷' ? results = divide(total, calculate)
                    : operation === '÷' && calculate === 0 ? results = "Results undefined"
                        : '';

    calculateOperand = results;
    operation = null;
    totalOperand = '';


}

// operator functions
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





