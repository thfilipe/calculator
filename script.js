const previousVal = document.querySelector('#previous');
const currentVal = document.querySelector('#current');
const operatorButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('#equals');

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
        };
    });

});

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // check equals sign
        if (newNumber) {
            previousVal.textContent = ""
            itemArray = [];

        }
        const newOperator = button.textContent;
        const value = currentVal.value;

        // check there is a number
        if (!itemArray.length && value == 0) return;

        // start new equation
        if (!itemArray.length) {
            itemArray.push(value, newOperator);
            previousVal.textContent = `${value}${newOperator}`
            return newNumber = true;
        }

        if (itemArray.length) {
            itemArray.push(value);

            const equationObject = {
                num1: parseFloat(itemArray[0]),
                num2: parseFloat(value),
                oper: itemArray[1]
            }

            equationArray.push(equationObject);

            const equationString =
                `${equationObject['num1']}
                ${equationObject['oper']}
                ${equationObject['num2']}`;

            const newValue = calculateResult(equationString, currentVal)

            previousVal.textContent = `${newValue} ${newOperator}`

            itemArray = [newValue, newOperator];
            newNumber = true;
            console.log(equationArray);

        }
    })
})

const calculateResult = (equation, currentVal) => {
    const regex = /(^[*/=])|(\s)/g;
    equation.replace(regex, '');
    const divideZero = /(\/0)/.test(equation);
    if (divideZero) return currentVal.value = 'Cannot divide by zero';
    return currentVal.value = eval(equation);

}

const clearButtons = document.querySelectorAll('#clear, #clear-entry');
clearButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        currentVal.value = 0;
        if (e.target.classList.contains('clear')) {
            previousVal.textContent = '';
            itemArray = [];
        };
    });
});

const backButton = document.querySelector('#back');
backButton.addEventListener('click', () => {
    if (currentVal.value.length == 1) {
        currentVal.value = 0;
    } else {
        currentVal.value = currentVal.value.slice(0, -1);
    }

});

const changeSignButton = document.querySelector('#change-sign');
changeSignButton.addEventListener('click', () => {
    if (currentVal.value.includes('-')) {
        currentVal.value = currentVal.value.slice(1);
    } else {
        currentVal.value = '-' + currentVal.value;
    }
});


function equals() {
    equalsButton.addEventListener('click', () => {
        calculateResult()
        updateDisplay()
    })
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





