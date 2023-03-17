import 'mathjs';


let math = require('mathjs');


/**
 * PEMDAS is applied to an expression to reduce it to a singular term
 *
 * @remark
 * Algorithm:
 * 1. Remove all spaces from expression
 * 2. Add implicit multiplication if necessary
 *      find all instances of x(), ()(), or ()x, and insert multiplication symbols
 * 3. Solve parenthesis starting with the lowest level
 *      find the first ending parenthesis
 *      traverse expression backwards to find opening parenthesis for current closing
 *      using emdas, simplify contents of the parenthesis
 * 4. Solve remaining emdas in expression
 *
 *
 * @param input - an expression of type string
 * @returns  the final simplified value
 */
export function pemdas(input: string) {
    let fixedInput = input.replace(/\s/g, "");
    fixedInput = fixImplicitMult(fixedInput);
    console.log(fixedInput);
    fixedInput = clearParenthesis(fixedInput);
    return(emdas(fixedInput, fixedInput));
}


function fixImplicitMult(inputString: string) {
	const implicitRegex = RegExp(/\d\(|\)\(|\)\d/);
	let implicitMult = implicitRegex.exec(inputString);
	while (implicitMult != null) {
		inputString = inputString.slice(0, implicitMult.index + 1) + '*' + inputString.slice(implicitMult.index + 1);
		implicitMult = implicitRegex.exec(inputString);
	}
	return inputString;
}

function clearParenthesis(input: string) {
	let i = 0;
	while (i < input.length) {
		if(input.charAt(i) == ')') {
			let innerI = i;
			while (true) {
				innerI--;
				if (input.charAt(innerI) == '(') {
					const expression = input.slice(innerI, i + 1);
					const result = emdas(input, expression)
					input = input.replace(expression, math.evaluate(result));
					i -= expression.length;
					break
				}
			}
		}
		i++;
	}
	return input;
}

function emdas(fullExpression: string, currentExpression: string) {

	//exponent
	let currentFull = performOperation(fullExpression, currentExpression, /\-?\d+\.?\d*\^\-?\d+\.?\d*/)
	
	//multiplication division
	currentFull = performOperation(currentFull[1], currentFull[0], /\-?\d+\.?\d*\*\-?\d+\.?\d*|\-?\d+\.?\d*\/\-?\d+\.?\d*/);

	//addition subtraction
	currentFull = performOperation(currentFull[1], currentFull[0], /\-?\d+\.?\d*\+\-?\d+\.?\d*|\-?\d+\.?\d*\-\-?\d+\.?\d*/);

	return currentFull[0];
}

function performOperation(fullExpression: string, currentExpression: string, regex: RegExp) {
	let toDo = currentExpression.match(regex);
	if (toDo == null) { return [currentExpression, fullExpression]; }
	
	while (toDo != null) {
		const result = math.evaluate(toDo[0]);
		currentExpression = currentExpression.replace(toDo[0], result);
		fullExpression = fullExpression.replace(toDo[0], result) 
		console.log(fullExpression);
		toDo = currentExpression.match(regex);
	}
	
	return [currentExpression, fullExpression];
}