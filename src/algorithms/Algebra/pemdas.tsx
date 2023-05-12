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
 * @returns  an array of all steps taken to simplify using pemdas rules
 */
export default function pemdas(input: string) {
	const steps: Array<string> = [];
	let fixedInput = input.replace(/\s/g, "");
	fixedInput = fixImplicitMult(fixedInput)
	steps.push(fixedInput);
	fixedInput = clearParenthesis(fixedInput, steps)
	
	emdas(fixedInput, fixedInput, steps);
	return steps;
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

function clearParenthesis(input: string, steps: Array<string>) {
	let i = 0;
	while (i < input.length) {
		if(input.charAt(i) == ')') {
			let innerI = i;
			while (true) {
				innerI--;
				if (input.charAt(innerI) == '(') {
					const expression = input.slice(innerI, i + 1);
					const result = emdas(input, expression, steps)
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

function emdas(fullExpression: string, currentExpression: string, steps: Array<string>) {

	//UNARY MINUS???
	//exponation of negative (in parenthesis)

	//exponent
	let currentFull = performOperation(fullExpression, currentExpression, /\-?\d+\.?\d*\^\-?\d+\.?\d*/, steps)
	
	//multiplication division
	currentFull = performOperation(currentFull[1], currentFull[0], /\-?\d+\.?\d*\*\-?\d+\.?\d*|\-?\d+\.?\d*\/\-?\d+\.?\d*/, steps);

	//addition subtraction
	currentFull = performOperation(currentFull[1], currentFull[0], /\-?\d+\.?\d*\+\-?\d+\.?\d*|\-?\d+\.?\d*\-\-?\d+\.?\d*/, steps);

	return currentFull[0];
}

function performOperation(fullExpression: string, currentExpression: string, regex: RegExp, steps: Array<string>) {
	let toDo = currentExpression.match(regex);
	//console.log(toDo);
	if (toDo == null) { return [currentExpression, fullExpression]; }
	
	while (toDo != null) {
		const result = math.evaluate(toDo[0]);
		currentExpression = currentExpression.replace(toDo[0], result);
		fullExpression = fullExpression.replace(toDo[0], result) 
		steps.push(fullExpression);
		toDo = currentExpression.match(regex);
	}
	
	return [currentExpression, fullExpression];
}
