export function add(functions:string[]):string{

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

    return "Placeholder"

}

export function subtract(functions: string[]): string{

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

    return "Placeholder";
}

export function multiply(){
    
    return;
}