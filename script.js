const previousText = document.querySelector('#previous');
const currentText = document.querySelector('#current');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('#equals');
const allClearButton = document.querySelector('#all-clear');
const backButton = document.querySelector('#back');


let currentOperand = '';
let totalOperand = '';
let operation = undefined;


function handleButtons() {

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentOperand === '0' ? currentOperand = "" : '';
            currentOperand = currentOperand.toString();
            if (button.textContent === "." && currentOperand.includes('.')) return;
            currentOperand += button.textContent.toString();
            updateDisplay();

        })

    })
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentOperand === '') return;
            if (button.textContent === "." && currentOperand.includes('.')) return;
            operation = button.textContent;

            updateDisplay();
            operate()

        })
    })
    equals()
    backspace()
    allClear()
}

handleButtons()


function updateDisplay() {
    currentText.textContent = currentOperand;
    previousText.textContent = totalOperand;
}



function operate() {
    if (currentOperand === '') return;
    totalOperand = `${currentOperand} ${operation}`
    currentOperand = '';
    if (totalOperand !== '') {
        calculateResult()
    };
}

function backspace() {
    backButton.addEventListener('click', () => {
        if (currentOperand.length === 1) {
            currentOperand = '0';
        } else {
            currentOperand = currentOperand.toString().slice(0, -1);
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
        operation = undefined;
        currentOperand = '0';
        updateDisplay()
    })
}

function calculateResult() {
    let calculate = parseFloat(currentOperand);
    let total = parseFloat(totalOperand);
    let results;
    if (isNaN(calculate) || isNaN(total)) return;
    operation === '+' ? results = add(total, calculate)
        : operation === '-' ? results = subtract(total, calculate)
            : operation === 'x' ? results = multiply(total, calculate)
                : operation === '÷' && calculate === 0 ? results = "Results undefined"
                    : operation === '÷' ? results = divide(total, calculate)
                        : '';

    if (results === undefined) return;
    currentOperand = results;
    totalOperand = `${results} ${operation}`;


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





