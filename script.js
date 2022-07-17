const previousVal = document.querySelector('#previous');
const currentVal = document.querySelector('#current');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('#equals');
const allClearButton = document.querySelector('#clear-entry');
const backButton = document.querySelector('#back');
const clearButton = document.querySelector('#clear')

let currentOperand = '';
let previousOperand = '';
let operation = undefined;
let itemArray = [];
const equationArray = [];
let newNumber = false;


numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {

        const newInput = button.textContent;
        if (newNumber) {
            currentVal.value = newInput;
            newNumber = false;
        } else {
            currentVal.value = currentVal.value == 0 ? newInput : `${currentVal.value}${newInput}`
        }

        // currentOperand === '0' ? currentOperand = "" : '';
        // currentOperand = currentOperand.toString();
        // if (button.textContent === "." && currentOperand.includes('.')) return;
        // currentOperand += button.textContent.toString();

        // updateDisplay();
    })

})
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {

        if (currentOperand === '') return;
        if (button.textContent === "." && currentOperand.includes('.')) return;
        operation = button.textContent;

        updateDisplay();
        operate();

    })
})


equals()
backspace()
allClear()
// handleButtons()


function updateDisplay() {
    currentVal.textContent = currentOperand;
    previousVal.textContent = previousOperand;
}



function operate() {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculateResult()
    };
    previousOperand = `${currentOperand} ${operation}`
    currentOperand = '';

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
        previousOperand = '';
        operation = undefined;
        currentOperand = '0';
        updateDisplay()
    })
}

function calculateResult() {
    let current = parseFloat(currentOperand);
    let previous = parseFloat(previousOperand);
    let results;
    if (isNaN(current) || isNaN(previous)) return;
    operation === '+' ? results = add(previous, current)
        : operation === '-' ? results = subtract(previous, current)
            : operation === 'x' ? results = multiply(previous, current)
                : operation === '÷' && calculate === 0 ? results = "Results undefined"
                    : operation === '÷' ? results = divide(previous, current)
                        : '';

    if (results === undefined) return;
    currentOperand = results;
    previousOperand = `${results} ${operation}`;


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





