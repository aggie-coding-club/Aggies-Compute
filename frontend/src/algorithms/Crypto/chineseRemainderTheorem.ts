import { GCDBigInt } from './helper_Crypto';
import { inverseModBigInt } from './helper_Crypto';
/**
 * Takes list of two modular equations and finds the common x value
 * x = a1 (mod p1), x = a2 (mod p2)
 *
 * @param a1 (bigint)
 * @param a2 (bigint)
 * @param p1 (bigint)
 * @param p2 (bigint)
 * @returns (bigint)
 */
export function CRT_helper(a1: bigint, a2: bigint, p1: bigint, p2: bigint): bigint {

    // First check that p1, p2 >= 2
    if (p1 < BigInt(2) || p2 < BigInt(2)){
        throw Error("p1 and p2 must be greater or equal to two");
    }


    // Check that gcd(p1,p2) = 1
    if (GCDBigInt(p1, p2)){
        throw Error("gcd(p1,p2) must be 1");
    }

    














    return BigInt(0);
}