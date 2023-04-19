    /*  Algorithm
        1. Get strings from input
        2. For each string:
            - Separate terms by using '+'/'-' symbols
            - If "-" found, add it to the beginning of the term that follows it (make negative)
            - Remove whitepace
            - Separate each individual term into the coefficient and variable, but keep paired
              (Be able to recognize that if there is only a variable, then the coefficient
                must be 1, and that if there is only a coeffecient then it is a constant)
        3. Identify two expressions to multiply together
            - Multiply each term in expression 1 by each term in expression 2
            - Outcome becomes its own expression
        4. Express the product of the first two expressions as an array
        5. Take the sum of terms and identify two expressions to multiply together
        (only if there exists two expressions, else continue)
        6. If there exists more than two expressions, repeat steps 4 and 5 until a single expression remains, otherwise
        continue
        7. Once all terms have been separated into their parts, find any terms that have the same variables
           but are in different functions
        8. Once all terms have been matched/added, repair the coefficients to their respective variables
        9. Insert "+" symbols before all positive terms excluding the first term and  "-" symbols before all negative terms 
        10. Return final result as a string  
    */

import { check } from "prettier";

    /*  Input --> List of strings
        Output -> String
        EG: 
            (input on website)
                Eq. 1: 2x + 1
                Eq. 2: 8x^2 + 7x + 2
                Eq. 3: 27
      
      
            (input to function)
                ["2x + 1", "8x^2 + 7x + 2", "27"]

            (algorithm steps)
                1. functions = ["2x + 1", "8x^2 + 7x + 2", "27"]
                2. terms = [["2x", "1"], ["8x^2", "7x", "2"], ["27"]]
                3. expr1 = [["2x", "1"], ["8x^2", "7x", "2"]]
                4. product1 = [["16x^3", "14x^2", "4x"], ["8x^2", "7x", "2"]]
                5. expr2 = [["16x^3", "14x^2", "8x^2", "4x", "7x", "2"], ["27"]]
                6. product2 = ["432x^3", "378x^2", "216x^2", "108x", "189x", "54"]
                7. likeTerms = [["432x^3"], ["378x^2", "216x^2"], ["108x", "189x"], ["54"]]
                8. newTerms = ["432x^3", "594x^2", "297x", "54"]
                9. result = "432x^3 + 594x^2 + 297x + 54"
                10. return result

            (expected output)
                "432x^3 + 594x^2 + 297x + 54"
    */
export default function multiply(func1:string, func2:string): string {
    const onlyConsts = /^[\d\s+-]+$/; // regex matches only constants, excluding variables and other characters
    const exponent = /^[-+]?\d?[a-zA-Z]\^\d$/; // exponents regex
    const variable = /^[-+]?\d?[a-zA-Z]$/; // variables regex
    const constant = /^[-+]?\d+$/; // constants regex
    const noCoefficient = /^[+-]?[a-zA-Z](\^\d+)?$/; // coefficient test regex

    if (onlyConsts.test(func1) && onlyConsts.test(func2)) {
        console.log('true')
        const product = parseFloat(func1) * parseFloat(func2);
        return product.toString();
    } else {
        var exp1 = func1.split(/(?=[+-])/); // splits expression by '+' or '-' between terms, excluding symbols in the first index
        var exp2 = func2.split(/(?=[+-])/);
 
        exp1 = checkCoeff(exp1);
        exp2 = checkCoeff(exp2);
        return distribute(exp1, exp2);
        function checkCoeff(exp: string[]): string[] { // checks if there is a coefficient present in front of a variable, if not, add '1' constant multiplier
            const updatedArray = []
            for (var item of exp) {
                if (noCoefficient.test(item)) {
                    if (item.includes('+') || item.includes('-')) {
                        item = item.slice(0, 1) + '1' + item.slice(1)
                    } else {
                        item = '1' + item;
                    }
                    updatedArray.push(item);
                } else {
                    updatedArray.push(item);
                }
            }
            return updatedArray;
        }
    }

    function distribute(arr1:string[], arr2:string[]): string {
        var varContainer1:string[] = [];
        var varContainer2:string[] = [];
        var numContainer1:string[] = [];
        var numContainer2:string[] = [];
        const numProduct: string[] = []; // stores the products of coefficients
        
        console.log(arr1)
        console.log(arr2)

        for (let i=0; i < arr1.length; i++) { // could be shortened with another function
            var toString = parseFloat(arr1[i]).toString();
            numContainer1.push(toString);
            // varContainer1.push()
        }
        for (let i=0; i < arr2.length; i++) {
            console.log(arr2[i]);
            var toString = parseFloat(arr2[i]).toString();
            numContainer2.push(toString);
            // varContainer2.push()
        }

        return 'placeholder';
    }
    return multiply(func1, func2);
}