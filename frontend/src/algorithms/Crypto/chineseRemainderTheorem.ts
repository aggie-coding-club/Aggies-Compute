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
    if (GCDBigInt(p1, p2) !== BigInt(1)){
        throw Error("gcd(p1,p2) must be 1");
    }

    // If a1 > p1
    if (a1 > p1){
        a1 = a1 % p1;
    }

    // If a2 > p2
    if (a2 > p2){
        a2 = a1 % p2;
    }

    // If a1 is negative
    if (a1 < BigInt(0)){
        a1 = p1 - ((a1*BigInt(-1)) % p1);
    }

    // If a2 is negative
    if (a2 < BigInt(0)){
        a2 = p2 - ((a2*BigInt(-1)) % p2);
    }

    // Calculates k
    let k: bigint = ((inverseModBigInt(p1, p2)) * (a2 - a1));

    // If k is negative
    if (k < BigInt(0)){
        k = p2 - ((k*BigInt(-1)) % p2);
        k = k % p2;
    }

    let x: bigint = a1 + (p1*k);

    return x;
}


/**
 * Takes list of two or more modular equations and finds the common x value
 * x = a_1 (mod p_1), x = a_2 (mod p_2),..., x = a_n (mod p_n)
 *
 * @param aList (array of bigints)
 * @param pList (array of bigints)
 * @returns (bigint)
 */
export function CRT(aList: Array<bigint>, pList: Array<bigint>): bigint {

    // Check if that either array is empty
    if (aList.length === 0 || pList.length === 0){
        throw Error("Input arrays cannot be empty");
    }

    // Check if the lists are 2 or more in length
    if (aList.length < 2 || pList.length < 2){
        throw Error("Input arrays cannot be less than a length of 2");
    }

    // Check if the lists are 10 or less
    if (aList.length > 10 || pList.length > 10){
        throw Error("Input arrays cannot be less than a length of 2");
    }

    // Check if the lists are equal
    if (aList.length !== pList.length){
        throw Error("Input arrays must have equal lengths");
    }

    // Check if there are 2 things on the lists only
    if (aList.length === 2){
        return CRT_helper(aList[0], aList[1], pList[0], pList[1]);
    }

    // Check if there are more than 2 things on the lists
    else{
        let a1: bigint = CRT_helper(aList[0], aList[1], pList[0], pList[1]);
        let p1: bigint = pList[0] * pList[1];
        for (let i: number = 2; i < aList.length; i++){
            let x: bigint = CRT_helper(a1, aList[i], p1, pList[i]);
            a1 = x;
            p1 = p1 * pList[i];
        }

        return a1;
    }
}