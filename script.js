const previousVal = document.querySelector('#previous');
const currentVal = document.querySelector('#current');
const operatorButtons = document.querySelectorAll('.operation');


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

        // change operators
        let newOperator;
        if (button.textContent == 'x') {
            newOperator = '*';
        } else if (button.textContent == '÷') {
            newOperator = '/';
        } else {
            newOperator = button.textContent
        }

        const value = currentVal.value;

        // check there is a number
        if (!itemArray.length && value == 0) return;

        // start new equation
        if (!itemArray.length) {
            itemArray.push(value, newOperator);
            previousVal.textContent = `${value} ${newOperator}`
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
        if (e.target.id == 'clear') {
            previousVal.textContent = '';
            itemArray = [];
        };
    });
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    const value = currentVal.value;
    let equationObject;

    if (!itemArray.length && equation.equationArray.length) {
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

    previousVal.textContent = `${equationString} =`

    newNumber = true;
    itemArray = [];
    console.log(equationArray);
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









