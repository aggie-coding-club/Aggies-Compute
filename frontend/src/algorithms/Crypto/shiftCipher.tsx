import {char_map} from './helper_Crypto';
import {inverse_char_map} from './helper_Crypto';
import {num_to_key} from './helper_Crypto';

/**
 * Takes a string and "shifts" it according to a specified shift value and inputted alphabet
 *
 *
 * @param m (The string to encrypt)
 * @param shift (amount of times to shift)
 * @param alpha (string alphabet)
 * @returns (string)
 */
export function shiftCipher(m: string, shift: number, alpha: string): string
{
    // Checks if string is empty
    if (m.length === 0) {
        throw Error('Cannot have a message with length zero');
    }

    // Checks if shift is decimal
    if (Math.floor(shift) !== shift){
        throw Error('Cannot have a decimal value as a shift');
    }

    // Checks if shift is zero
    if (shift === 0) {
        throw Error('Cannot have a shift with size zero');
    }

    // Creates both hashmaps
    let let_to_num = char_map(alpha);
    let num_to_let = inverse_char_map(alpha);
    let modulo: number = let_to_num.size;
    let s: number = shift;


    // Checks if shift is negative, solves for congruent positive shift
    if (shift < 0){
        s = modulo - ((shift*-1) % modulo);
    }

    // Checks if shift is possible, reduces it by modulo
    else{
        s = shift % modulo;
    }

    // Iterates over m, and creates encrypted message
    let result: string = "";
    for (let i: number = 0; i < m.length; i++)
    {
        // First get char of iteration
        // find the equivalent mapping number
        // convert to int and apply the shift
        // convert back to string 
        // find equivalent mapping char
        // append to result

        let letter: string = m[i];

        // Skips spaces
        if (letter === " "){
            result = result + " ";
        }

        // Encrypts
        else{
            let sNum: string | undefined = let_to_num.get(letter);

            if (sNum === undefined){
                throw Error("Character in m is not found in the alphabet");
            }

            let iNum: number = +(sNum ?? '');
            iNum = (iNum + s) % modulo;
            sNum = num_to_key(iNum, (sNum ?? '').length);
            let c: string | undefined = num_to_let.get(sNum);
            result = result + c;
        }
    }

    return result;
}



