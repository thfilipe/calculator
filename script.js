const previousVal = document.querySelector('#previous');
const currentVal = document.querySelector('#current');

let itemArray = [];
let equationArray = [];
let newNumber = false;

const maths = {
    '+': function (x, y) { return Number(x) + Number(y) },
    '-': function (x, y) { return Number(x) - Number(y) },
    'x': function (x, y) { return Number(x) * Number(y) },
    '÷': function (x, y) { return Number(x) / Number(y) }
};

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const newInput = button.textContent;

        if (newNumber) {
            currentVal.value = newInput;
            newNumber = false;
        } else if (currentVal.value == 0 && currentVal.value.length == 1) {
            currentVal.value = newInput;
        } else {
            currentVal.value = `${currentVal.value}${newInput}`
        }

    });
});

const decimalButton = document.querySelectorAll('.decimal');
decimalButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const decimal = button.textContent;

        if (currentVal.value.includes(decimal)) return;

        currentVal.value = `${currentVal.value}${decimal}`
    });
});

const operatorButtons = document.querySelectorAll('.operation');
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const operator = button.textContent;
        const value = currentVal.value;

        // check equals sign
        if (newNumber) {
            previousVal.textContent = "";
            itemArray = [];
        };

        // check there is a number
        if (!itemArray.length && value == 0) return;

        // start new equation
        if (!itemArray.length) {
            itemArray.push(value, operator);
            previousVal.textContent = `${value} ${operator}`;
            return newNumber = true;
        };


        if (itemArray.length) {
            itemArray.push(value);

            const equationObject = {
                num1: parseFloat(itemArray[0]),
                num2: parseFloat(value),
                oper: itemArray[1]
            };

            equationArray.push(equationObject);

            const equationString =
                `${equationObject['num1']} ${equationObject['oper']} ${equationObject['num2']}`;

            currentVal.value = calculateResult(equationString);
            const newValue = currentVal.value

            previousVal.textContent = `${newValue} ${operator}`;

            itemArray = [newValue, operator];
            newNumber = true;
        };
    });
});

const calculateResult = (equation) => {
    const split = equation.split(" ");
    return maths[split[1]](split[0], split[2]);
};

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
        };
    } else if (!itemArray.length) {
        return value;
    } else {
        itemArray.push(value);
        equationObject = {
            num1: parseFloat(itemArray[0]),
            num2: parseFloat(value),
            oper: itemArray[1]
        };
    };


    equationArray.push(equationObject);

    const equationString =
        `${equationObject['num1']} ${equationObject['oper']} ${equationObject['num2']}`;

    currentVal.value = calculateResult(equationString);

    previousVal.textContent = `${equationString} =`;

    newNumber = true;
    itemArray = [];

});

const backButton = document.querySelector('#back');
backButton.addEventListener('click', () => {

    if (currentVal.value.length == 2 && currentVal.value.includes('-')) {
        currentVal.value = -0;
    };

    if (currentVal.value.length == 1) {
        currentVal.value = 0;
    } else {
        currentVal.value = currentVal.value.slice(0, -1);
    };

});

const changeSignButton = document.querySelector('#change-sign');
changeSignButton.addEventListener('click', () => {
    if (currentVal.value.includes('-')) {
        currentVal.value = currentVal.value.slice(1);
    } else {
        currentVal.value = '-' + currentVal.value;
    };
});









