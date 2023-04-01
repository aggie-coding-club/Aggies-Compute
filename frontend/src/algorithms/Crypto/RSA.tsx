import { isPrime } from "mathjs";
import { GCDBigInt, inverseMod, inverseModBigInt, isPrimeBigInt } from "./helper_Crypto";

/**
 * Prime factorization of number
 * 
 * @param p (bigint)
 * @returns (array of prime factors)
 */
export function RSA_Encrypt(m: bigint, p: bigint, q: bigint, e: bigint): bigint {

    // Check if p and q are prime
    if (!isPrimeBigInt(p) || !isPrimeBigInt(q)){
        throw Error("p and q must both be primes")
    }

    let n: bigint = p * q;
    let totient_n: bigint = (p - BigInt(1)) * (q - BigInt(1));

    // Checks if e is: 1 < e < (p-1)(q-1)
    if (!(BigInt(1) < e) || !(e < totient_n)){
        throw Error ("e must be: 1 < e < totient_n");
    }

    // Checks if e is coprime with n and totient_n
    if (GCDBigInt(e, n) !== BigInt(1) || GCDBigInt(e, totient_n) != BigInt(1)){
        throw Error("e must be coprime with n and totient_n")
    }
    
    // Encryption
    let c: bigint = (m**e) % n;

    return c;
}

