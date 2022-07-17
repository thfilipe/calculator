const previousVal = document.querySelector('#previous');
const currentVal = document.querySelector('#current');

const operatorButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('#equals');
const allClearButton = document.querySelector('#clear-entry');



let currentOperand = '';
let previousOperand = '';
let operation = undefined;
let itemArray = [];
const equationArray = [];
let newNumber = false;


const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const newInput = button.textContent;
        if (newNumber) {
            currentVal.value = newInput;
            newNumber = false;
        } else {
            currentVal.value = currentVal.value == 0 ? newInput : `${currentVal.value}${newInput}`
        }
    })

})

const clearButtons = document.querySelectorAll('#clear, #clear-entry');
clearButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        currentVal.value = 0;
        if (e.target.classList.contains('clear')) {
            previousVal.textContent = '';
            itemArray = [];
        }
    })
})

const backButton = document.querySelector('#back');



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





