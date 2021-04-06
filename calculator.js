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

function operate (operator, num1, num2) {
    switch (operator) {
        case add:
            console.log('addition works');
            return add(num1, num2);
            break;
        case subtract:
            console.log('subtraction works');
            return subtract(num1, num2);
            break;
        case multiply:
            console.log('multiplication works');
            let multiplyArray = [num1, num2];
            console.log(multiplyArray);
            return multiply(multiplyArray);
            break;
        case divide:
            console.log('division works');
            let divideArray = [num1, num2];
            return divide(divideArray);
            break;
        default:
            console.log('something went wrong');
    }
}

let display = document.querySelector('#display');

let buttons = document.querySelectorAll('button');
let buttonValue;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonValue = button.textContent;
        display.textContent = `${buttonValue}`;
    });
});