import { isPrimRoot } from './helper_Crypto';


/**
 * Calculates the shared key of two people
 *
 * @param a (secret key a)
 * @param b (secret key b)
 * @param g (public shared base)
 * @param p (public prime modulus)
 * @returns (shared key)
 */
export function diffieHellman(a: bigint, b: bigint, g: bigint, p: bigint): bigint {

    // Check if a is primitive root of p
    if (!isPrimRoot(a, p)){
        throw Error("a must be a primitive root of p")
    }

    // Checks if 1 <= a <= p - 1 and 1 <= b <= p - 1
    if (!(BigInt(1) <= a) || !(a <= p - BigInt(1)) ||
    !(BigInt(1) <= b) || !(b <= p - BigInt(1))) {
        throw Error("a and b must be 1 <= a,b <= p - 1")
    }

    // Calculate A and B
    let A: bigint = (g**a) % p;
    let B: bigint = (g**b) % p;

    // Calculates shared key
    let A_b: bigint = (A**b) % p;
    let B_a: bigint = (B**a) % p;

    return A_b;
}