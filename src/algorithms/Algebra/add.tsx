    /** 
     *  How to get function terms separated:
     * 
     *  REGEX EXPRESSION --> /([+-]*\s*\d*\w*\^*\d*)/g
     *  
     *  IDEAL CASE - NO SPACES:
     *      input --> 5x^2+3x-7
     *      regex --> 5x^2, +3x, -7
     * 
     *  IF SPACES INCLUDED:
     *      input --> 5x^2 + 3x - 7
     *      regex --> 5x^2, [space], + 3x, [space], - 7
     * 
     *  ^^ in case with spaces we can just ignore them by checking for them, but will have to alter string to 
     *     remove space between sign and digit
     * 
     *  
     *  Expression  |             Explanation
     * _____________|____________________________________________________________
     *       *      |   Matches zero or more of whatever preceeds it
     *     [+-]     |   Matches either '+' or '-' 
     *      \s      |   Matches any space character
     *      \d      |   Matches any digit (0-9, used to capture coeffecient)
     *      \w      |   Matches any word character (used to capture variable)
     *      \^      |   Matches a '^' character (used to capture exponents)
     *      \d      |   Matches any digit (used to capture magnitude of exponent)
     *       g      |   "global" modifier, sets to not return until end of string
     */

            /** Algorithm
        *   1. Get strings from input
        *   2. For each string:
        *       - Separate terms using regex
        *       - If "-" found, add it to the beginning of the term that follows it (make negative)
        *       - Remove whitepace
        *       - Separate each individual term into the coefficient and variable, but keep paired
        *         (Be able to recognize that if there is only a variable, then the coefficient
        *          must be 1, and that if there is only a coeffecient then it is a constant)
        *   3. Once all terms have been separated into their parts, match like terms and add the coefficients
        *   4. Once all terms have been matched/added, re-pair the coefficients to their respective variables
        *   5. Insert "+" symbols before all positive terms excluding the first term and  "-" symbols before all negative terms 
        *   6. Return final result as a string  
        */

        /** Input --> List of strings
        *  Output -> String
        *  EG: 
        *     (input on website)
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
        *           3. likeTerms = [["8x^2"], ["2x", "7x"], ["1", "2", "27"]]
        *           4. newTerms = ["8x^2", "9x", "30"]
        *           5. result = "8x^2 + 9x + 30"
        *           6. return result
        *
        *       (expected output)
        *           "8x^2 + 9x + 30"
        */          

export default function add(func1:string, func2:string):string{
    // regex
    const regex = /[+-]*\s*\d*\w*\^*\d*/g; // separates polynomials into individual terms
    const power = /^([+-]?\d*)[a-zA-Z]\^([+-]?\d+)$/; // identifies use of ^ symbol
    const variable = /^[+-]?\d*?[a-zA-Z](?!\^)$/; // identifies variables 
    const constant = /^[-+]?\d+$/; // identifies constants 

    function start(exp1: string, exp2: string): string{
        var combined = exp1 + "+" + exp2; // combine both expressions to isolate terms
        if (/\+-/.test(combined)) {
            combined = combined.replace(/\+-/, '-')
        }
        // console.log(combined)
        const simplifiedStr = combined.replace(/\s/g, "") // regex removes spaces
        const terms = simplifiedStr.match(regex);
    
        if (terms) {
            const newArray: string[] = terms.filter((string) => string !== '');
            return groupTerms(newArray);
        } else {
            return "";
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
    
    
    for (const term of variables) {
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
    var sum = 0;

    let currentNestedIndex = 0;
    var remaindingChars:string[] = [];
    var sumsExp = [];
    // console.log(exponents)
    for (var item of exponents) {
        var number = parseFloat(item);
        if (noConstantMultiplier.test(item)) {
            number = parseFloat('1' + item);
        }
        sumsExp.push(number.toString())
        const index = item.search(/[a-z]/i);
        if (index >= 0) {
            const characters = item.substring(index);
            remaindingChars.push(characters)
        }
        
    }
    
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

    varList.push(sumVar.toString() + letter)
    // console.log(varList)
    
    // console.log(numbers)
    for (const number of numbers) {
        sumNumbers += parseFloat(number)
    }
    
    constList.push(sumNumbers.toString())
    
    const finalCombinedList: string[][] = []
    finalCombinedList.push(newRemaindingChars)
    finalCombinedList.push(varList)
    finalCombinedList.push(constList)
    return concatenate(finalCombinedList);
    }

    function concatenate(input: any[]): string {
    return input.flatMap((item: any) => {
        return typeof item === 'string' ? item : concatenate(item);
    }).join(" + ");
    }
    // fix: remove + that precedes the first item
    var answer = start(func1, func2)
    if (/\+ 0|- 0\b/g.test(answer)) {
        answer = answer.replace(/\+ 0|- 0\b/g, '');
    }
    if (/\+\s*\-/g.test(answer)) {
        answer = answer.replace(/\+\s*\-/g, '- ');
        
    }
    if (/^\s*\+/.test(answer)) {
        answer = answer.replace(/^\s*\+/, '');
    }

    console.log(answer)

        return answer;

}