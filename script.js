const previousVal = document.querySelector('#previous');
const currentVal = document.querySelector('#current');


let itemArray = [];
let equationArray = [];
let newNumber = false;

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const newInput = button.textContent;
        console.log(button.textContent);

        if (newNumber) {
            currentVal.value =
                newInput === '.'
                    ? currentVal.value
                    : newInput;
            newNumber = false;
        } else if (currentVal.value.includes('.') && newInput === '.') {
            return;
        } else {
            currentVal.value = currentVal.value == 0 && currentVal.value.length == 1 && newInput !== '.'
                ? newInput : `${currentVal.value}${newInput}`;
        }
    });
});

const operatorButtons = document.querySelectorAll('.operation');
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // check equals sign
        if (newNumber) {
            previousVal.textContent = "";
            itemArray = [];

        }

        // change operators
        let newOperator;
        if (button.textContent == 'x') {
            newOperator = '*';
        } else if (button.textContent == '÷') {
            newOperator = '/';
        } else {
            newOperator = button.textContent;
        }

        const value = currentVal.value;

        // check there is a number
        if (!itemArray.length && value == 0) return;

        // start new equation
        if (!itemArray.length) {
            itemArray.push(value, newOperator);
            previousVal.textContent = `${value} ${newOperator}`;
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
            console.log(equationArray)
            const equationString =
                `${equationObject['num1']} ${equationObject['oper']} ${equationObject['num2']}`;

            const newValue = calculateResult(equationString, currentVal);

            previousVal.textContent = `${newValue} ${newOperator}`;

            itemArray = [newValue, newOperator];
            newNumber = true;
        }
    })
})

const calculateResult = (equation, currentVal) => {
    let split = equation.split(" ")
    let maths = {
        '+': function (x, y) { return Number(x) + Number(y) },
        '-': function (x, y) { return x - y },
        '*': function (x, y) { return x * y },
        '/': function (x, y) { return x / y }
    };
    return currentVal.value = maths[split[1]](split[0], split[2]);
}

const clearButtons = document.querySelectorAll('#clear, #clear-entry');
clearButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        currentVal.value = 0;

        if (e.target.id == 'clear') {
            equationArray = [];
            itemArray = [];
            previousVal.textContent = '';
        };
    });
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    const value = currentVal.value;
    let equationObject;


    if (!itemArray.length && equationArray.length) {
        const lastEquation = equationArray[equationArray.length - 1];
        equationObject = {
            num1: parseFloat(value),
            num2: lastEquation.num2,
            oper: lastEquation.oper
        }
    } else if (!itemArray.length) {
        return value;
    } else {
        itemArray.push(value);
        equationObject = {
            num1: parseFloat(itemArray[0]),
            num2: parseFloat(value),
            oper: itemArray[1]
        }
    }


    equationArray.push(equationObject);

    const equationString =
        `${equationObject['num1']} ${equationObject['oper']} ${equationObject['num2']}`

    calculateResult(equationString, currentVal);

    previousVal.textContent = `${equationString} =`;

    newNumber = true;
    itemArray = [];

});

const backButton = document.querySelector('#back');
backButton.addEventListener('click', () => {

    if (currentVal.value.length == 2 && currentVal.value.includes('-')) {
        currentVal.value = -0;
    }

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









