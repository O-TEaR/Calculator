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