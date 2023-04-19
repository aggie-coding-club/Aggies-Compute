/**  Algorithm
    *   1. Get strings from input
    *   2. For each string:
    *       - Separate terms using regex
    *       - If "-" found, add it to the beginning of the term that follows it (make negative)
    *       - Remove whitepace
    *       - Separate each individual term into the coefficient and variable, but keep paired
    *         (Be able to recognize that if there is only a variable, then the coefficient
    *           must be 1, and that if there is only a coeffecient then it is a constant)
    *   3. For all strings EXCEPT function 1, change all negatives to positives and vice verse
    *   4. Once all terms have been separated into their parts, find any terms that have the same variables
    *      but are in different functions
    *   5. Once all terms have been matched/added, re-pair the coefficients to their respective variables
    *   6. Insert "+" symbols before all positive terms excluding the first term and  "-" symbols before all negative terms 
    *   7. Return final result as a string  
    */

    /**  Input --> List of strings
    *   Output -> String
    *   EG: 
    *       (input on website)
    *           Eq. 1: 2x + 1
    *           Eq. 2: 8x^2 + 7x + 2
    *           Eq. 3: 27
    * 
    * 
    *       (input to function)
    *           ["2x + 1", "8x^2 + 7x + 2", "27"]
    *
    *       (algorithm steps)
    *           1. functions = ["2x + 1", "8x^2 + 7x + 2", "27"]
    *           2. terms = [["2x", "1"], ["8x^2", "7x", "2"], ["27"]]
    *           3. terms = [["2x", "1"], ["-8x^2", "-7x", "-2"], ["-27"]]
    *           4. likeTerms = [["8x^2"], ["2x", "-7x"], ["1", "-2", "-27"]]
    *           5. newTerms = ["8x^2", "-5x", "-28"]
    *           6. result = "8x^2 - 5x - 28"
    *           7. return result
    *
    *       (expected output)
    *           "8x^2 - 5x - 28"
    */


export default function subtract(func1:string, func2:string):string{
    // regex
    const regex = /[+-]*\s*\d*\w*\^*\d*/g; // separates polynomials into individual terms
    const power = /^([+-]?\d*)[a-zA-Z]\^([+-]?\d+)$/; // identifies use of ^ symbol
    const variable = /^[+-]?\d*?[a-zA-Z](?!\^)$/; // identifies variables 
    const constant = /^[-+]?\d+$/; // identifies constants 

    function start(exp1: string, exp2: string): string{
        if (exp1 === exp2) {
            return '0';
        } else {
            const newExp2 = exp2.replace(/[+-]|^([^+-])/g, (match, group1) => {
                return match === "+" ? "-" : match === "-" ? "+" : `-${group1}`;
            });
            
            var combined = exp1 + "+" + newExp2; // combine both expressions to isolate terms
            if (/\+-/.test(combined)) {
                combined = combined.replace(/\+-/, '-')
            }
            if (/(\+\+)/g.test(combined)) {
                combined = combined.replace(/(\+\+)/g, "+");
            }
            
            console.log(combined)
            const simplifiedStr = combined.replace(/\s/g, "") // regex removes spaces
            const terms = simplifiedStr.match(regex);
        
            if (terms) {
                const newArray: string[] = terms.filter((string) => string !== '');
                return groupTerms(newArray);
            } else {
                return "";
            }
        }
    }
    
    function groupTerms(newArray: string[]): string{
        var exponents:string[] = []
        var variables:string[] = []
        var numbers:string[] = []
        const likeTerms:string[][] = [] // final list that contains all terms
        const groups: {[degree: number]: string[][]} = {}; // group exponents based on number
        for (const item of newArray) {
            if (power.test(item)) {
                exponents.push(item);
            } else if (variable.test(item)) {
                variables.push(item);
            } else if (constant.test(item)){
                numbers.push(item);
            }
        }
        const groupedConstants: { [key: string]: string[] } = {};
        for (const constant of exponents) {
            const match = constant.match(/x\^(\d+)/);
            if (match !== null) {
                const carat = match[1];
                if (carat in groupedConstants) {
                    groupedConstants[carat].push(constant);
                } else {
                    groupedConstants[carat] = [constant];
                }
            }
            
        }
        var groupedExponents = Object.values(groupedConstants);
        likeTerms.push(groupedExponents.flat())
        likeTerms.push(variables)
        likeTerms.push(numbers)
        return sumTerms(likeTerms);
    }

    function sumTerms(likeTerms: string[][]): string {
    var exponents = likeTerms[0]
    var variables = likeTerms[1]
    var numbers = likeTerms[2]

    var sumNumbers:number = 0
    const constList = []
    var sumExponents = 0
    var sumVar = 0
    var letter = '';
    const varList = []

    const pattern = /([-+]?[0-9]*\.?[0-9]+)/;
    
    
    for (var term of variables) {
        if (/([+-])([a-zA-Z])/g.test(term)) {
            term = term.replace(/([+-])([a-zA-Z])/g, '$11$2');
        }
        const letterMatch = term.match(/[a-z]/i);
        if (letterMatch) {
            var letter = letterMatch[0]
            const match = pattern.exec(term);
            if (match) {
            sumVar += parseFloat(match[1]);
            }
        }
        }
    

    const noConstantMultiplier = /^[+-]?\w\^\d+$/;
    const negativeNoConstMult = /^-([a-zA-Z])\^\d+$/;
    var sum = 0;

    let currentNestedIndex = 0;
    var remaindingChars:string[] = [];
    var sumsExp = [];
    // console.log(exponents)
    for (var item of exponents) {

        var number = parseFloat(item);
        if (negativeNoConstMult.test(item)) { // checks for constant multiplier
            number = parseFloat('-1' + item);
        } else if (noConstantMultiplier.test(item)) {
            number = parseFloat('1' + item);
        }
        sumsExp.push(number.toString())
        const index = item.search(/[a-z]/i);
        if (index >= 0) {
            const characters = item.substring(index);
            remaindingChars.push(characters)
        }
        
    }
    // console.log(sumsExp)
    const resultExponents: string[] = [];
    for (let i = 0; i < sumsExp.length; i++) {
        resultExponents.push(sumsExp[i] + remaindingChars[i])
    }
    // console.log(resultExponents)
    const termCoefficients: { [exponent: string]: number } = {};

    for (const term of resultExponents) {
        const match = term.match(/([+-]?\d*)([a-zA-Z]\^\d+)/);
        if (match) {
            const coefficient = Number(match[1] || '1');
            const exponent = match[2];
            termCoefficients[exponent] = (termCoefficients[exponent] || 0) + coefficient;
        }
    }
    const newRemaindingChars = Object.keys(termCoefficients).map(
        (exponent) => `${termCoefficients[exponent]}${exponent}`
    );
    for (let i = 0; i < newRemaindingChars.length; i++) {
        if (/0(?=[a-zA-Z])/.test(newRemaindingChars[i])) {
            newRemaindingChars[i] = ''
        }
    }
    varList.push(sumVar.toString() + letter)
    // console.log(varList)
    
    // console.log(numbers)
    for (const number of numbers) {
        sumNumbers += parseFloat(number)
    }
    
    constList.push(sumNumbers.toString())

    const noMultiplier = /^0[A-Za-z]$/;
    for (let i = 0; i < varList.length; i++) {
        if (pattern.test(varList[i])) {
            varList[i] = varList[i].replace(/^0[A-Za-z]$/, '');
        }
    }
    // console.log(varList)
    const finalCombinedList: string[][] = []
    finalCombinedList.push(newRemaindingChars)
    finalCombinedList.push(varList)
    finalCombinedList.push(constList)
    return concatenate(finalCombinedList);
    }

    function concatenate(input: any[]): string { // combine all indices of list into final form with '+'
    return input.flatMap((item: any) => {
        return typeof item === 'string' ? item : concatenate(item);
    }).join(" + ");
    }
    
    // formatting in if statements
    var answer = start(func1, func2)
    if (/\+ 0|- 0\b/g.test(answer)) {
        answer = answer.replace(/\+ 0|- 0\b/g, '')
    }
    if (/\+\s*\-/g.test(answer)) {
        answer = answer.replace(/\+\s*\-/g, '- ')
    }
    answer = answer.replace(/^(?:\s*\+|\+?\s+)/, '');
    if (answer.trim().length === 1 && /[a-z]/i.test(answer.trim())) {
        answer = '0'
    }
    if (/\+ {0,2}\+/g.test(answer)) {
        answer = answer.replace(/\+ {0,2}\+/g, '+')
    }
    console.log(answer)
        return answer;

}