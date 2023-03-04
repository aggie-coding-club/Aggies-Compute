import {char_map} from './helper_Crypto';
import {inverse_char_map} from './helper_Crypto';
import {num_to_key} from './helper_Crypto';
import {GCD} from './helper_Crypto';

/**
 * Takes a string message and encrypts it for some integers a, b, with gcd(a, alphabet.length) = 1
 * in the equation y = ax + b (mod alphabet.length) where x is the message and y is the encrypted message
 *
 *
 * @param m (The string to encrypt)
 * @param a ("Some integer")
 * @param b ("Some integer")
 * @param alphabet (string alphabet)
 * @returns (string)
 */
export function affineCipher_Encrypt(m: string, a: number, b: number, alphabet: string,): string
{
    // Check if m is nonempty
    if (m.length === 0){
        throw Error('Cannot have a message with length zero');
    }

    // Check if a and b are whole numbers
    if (Math.floor(a) !== a || Math.floor(b) !== b){
        throw Error("Cannot have decimal values for a or b");
    }

    // Check if a and b are positive
    if (a <= 0 || b <= 0){
        throw Error("Cannot have non-positive values for a or b");
    }


    // Create hashmaps
    let let_to_num = char_map(alphabet);
    let num_to_let = inverse_char_map(alphabet);


    // Check gcd(a, alphabet.length) = 1
    if (GCD(a, alphabet.length) !== 1){
        throw Error("gcd(a, alphabet.length) must be equal to 1");
    }


    let result: string = "";
    for (let i: number = 0; i < m.length; i++){
        // Loop through m 
        // First get char of iteration
        // find the equivalent mapping number
        // convert to int and apply the cipher equation
        // convert back to string 
        // find equivalent mapping char
        // append to result

        let letter: string = m[i];
        let modulo: number = alphabet.length;

        // Skips spaces
        if (letter === " "){
            result = result + " ";
        }

        let sNum: string | undefined = let_to_num.get(letter);

        if (sNum === undefined){
            throw Error("Character in m is not found in the alphabet");
        }

        let iNum: number = +(sNum ?? '');
        iNum = ((a * iNum) + b) % modulo;
        sNum = num_to_key(iNum, (sNum ?? '').length);
        let c: string | undefined = num_to_let.get(sNum);
        result = result + c;

    }

    return result;
}

