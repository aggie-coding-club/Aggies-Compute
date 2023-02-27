import {char_map} from './helper_Crypto';
import {inverse_char_map} from './helper_Crypto';
import {num_to_key} from './helper_Crypto';

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
        throw Error("Cannot have decimal values for a or b")
    }

    // Check if a and b are positive
    if (a <= 0 || b <= 0){
        throw Error ("Cannot have non-positive values for a or b")
    }

    // Check gcd(a, alphabet.length) = 1

    // Create hashmaps


    let result: string = "";
    // Loop through m 
        // First get char of iteration
        // find the equivalent mapping number
        // convert to int and apply the cipher equation
        // convert back to string 
        // find equivalent mapping char
        // append to result

    return result;
}

