function add (x,y) {
	return x + y;
}

function subtract (x,y) {
    return x - y;
}

function multiply (x) {
	const math = x.reduce((total, num) => {
		return total * num;
	});

	return math;
}

function divide (x) {
    const math = x.reduce((total, num) => {
        return total / num;
    });
    return math;
}

function operate (num1, operator, num2) {
    switch (operator) {
        case '+':
            console.log('addition works');
            return add(num1, num2);
            break;
        case '-':
            console.log('subtraction works');
            return subtract(num1, num2);
            break;
        case '*':
            console.log('multiplication works');
            let multiplyArray = [num1, num2];
            console.log(multiplyArray);
            return multiply(multiplyArray);
            break;
        case '/':
            console.log('division works');
            let divideArray = [num1, num2];
            return divide(divideArray);
            break;
        default:
            console.log('something went wrong');
    }
}

let expDisplay = document.querySelector('#expDisplay');
let ansDisplay = document.querySelector('#ansDisplay');

let buttons = document.querySelectorAll('button');
let buttonValue;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
        buttonValue = button.textContent;
        check();
        expDisplay.textContent = `${expressionArray.join('')}`;
    });
});

const validateNumber = /[0-9]/;
const validateOperator = /[\*\+\-\/]/;
const validateEqual = /[=]/;
const validateClear = /Clear/
let expressionArray = [];
let operateVals = [];
let aNumber = [];
let bNumber = [];
let answer;

function check() {
    if (validateNumber.test(buttonValue)) {
        console.log('it is a number');
        expressionArray.push(Number(buttonValue));
        placeVals();
    }
    else if (validateOperator.test(buttonValue)) {
        console.log('it is an operator')
        expressionArray.push(buttonValue);
        checkOperator();
    }
    else if (validateEqual.test(buttonValue)) {
        console.log('equal button');
        checkExpression ();
        console.log(answer);
        clearCalc();
    }
    else if (validateClear.test(buttonValue)) {
        console.log('you hit clear');
        clearCalc();
        ansDisplay.textContent = '';
    }
    console.log(expressionArray);
    console.log(`operate values is ${operateVals}`);
    console.log(`Anumber is ${aNumber} and bNumber is ${bNumber}`);
}

function checkOperator() {
    if (operateVals.length == 2 && bNumber.length > 0){
        bNumber = bNumber.join('');    
        operateVals[2] = Number(bNumber);    
        console.log(operateVals.length);      
        answer = operate(operateVals[0], operateVals[1], operateVals[2]);
        console.log(`ANSWER IS ${answer}`);
        replaceFirstNum();
    }    
    else if (operateVals.length == 0 && aNumber.length > 0) {
        aNumber = aNumber.join('');    
        operateVals.push(Number(aNumber));        
        operateVals.push(buttonValue);            
    } else {    
        operateVals[1] = buttonValue;    
      }      
    }            

function placeVals () {
    if (operateVals.length == 0) {
        aNumber.push(buttonValue);
    }
    else if (operateVals.length == 2) {
        bNumber.push(buttonValue);
        bNumber.join('');
        console.log(bNumber);
    }
}

function replaceFirstNum() {
    operateVals = [answer, buttonValue];
    aNumber = answer;
    bNumber = [];
}

function checkExpression () {
    if (operateVals.length == 2) {
        bNumber = bNumber.join('');    
        operateVals[2] = Number(bNumber);
        answer = operate(operateVals[0], operateVals[1], operateVals[2]);
        if (operateVals[1] == '/' && operateVals[2] == 0) {
            alert('you can\'t do that');
            clearCalc();
        }
        else if (Number.isInteger(answer)) {
            console.log(`ANSWER IS ${answer}`);
            ansDisplay.textContent = `${answer}`;
            replaceFirstNum();
        }
        else {
            ansDisplay.textContent = `${answer.toFixed(2)}`;
            replaceFirstNum();
        }
    }
}

function clearCalc () {
    expressionArray = [];    
    operateVals = [];    
    aNumber = [];    
    bNumber = [];    
}