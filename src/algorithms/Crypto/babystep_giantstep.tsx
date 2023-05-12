
import { inverseModBigInt } from './helper_Crypto';
import { isPrimeBigInt } from './helper_Crypto';



/**
 * Shank's Babystep-Giantstep Algorithm is used to solve the discrete logarithm problem
 *
 *
 * @remark
 * Algorithm:
 * 1. Check if modulus is prime
 * 2. Check if base is a primitive root of modulus
 * 3. Calculate N, the ceil of the square root of modulus
 * 4. Compute base^-N mod modulus
 *    4a. Calculate base^-1, inverse of base mod modulus using euclidean algorithm
 *    4b. Calculate (base^-1)^N mod modulus using succseive squaring method
 * 5. Compute base^i mod modulus for i = 0 to N
 * 6. Compute base^j * (base^-N)^i mod modulus for j = 0 to N
 * 7. Check if values of step 6 are in step 5
 * 8. return x = i + jN
 *
 * Given an Equation in the form of: base^x = target (mod modulus)
 * @param base - a primitive root base of the equation
 * @param modulus - a prime modulus of the equation
 * @returns x - unknown variable
 */

export function babystep_giantstep(
  base: bigint,
  modulus: bigint,
  target: bigint
): number {
  if (!isPrimeBigInt(BigInt(modulus))) {
    throw Error('modulus must be prime');
  }

  // revist need to chec if base is primitive root of modulus
  let N: bigint = BigInt(Math.floor(Math.sqrt(Number(modulus))) + 1);

  let baby_step = new Map();
  let giant_step = new Map();
  for (let i = BigInt(0); i <= N; i++) {
    baby_step.set((base**i) % modulus, i);
    giant_step.set((target * (inverseModBigInt(base, modulus)**(i*N))) % modulus, i);
  }

  
  for (let key of giant_step.keys()) {
    if (baby_step.has(key)) {
      return baby_step.get(key) + giant_step.get(key) * N;
    }
  }

  return -1;
}

export function getN(modulus: bigint){
  return (Math.floor(Math.sqrt(Number(modulus))) + 1).toString();
}

export function babyList(base: bigint,modulus: bigint, target: bigint) {
  // revist need to chec if base is primitive root of modulus
  let N: bigint = BigInt(Math.floor(Math.sqrt(Number(modulus))) + 1);

  let baby_step = new Map();
  let result = "";
  for (let i = BigInt(0); i <= N; i++) {
    result += ((base**i) % modulus) + " ";
  }

  return result;
}

export function giantList(base: bigint,modulus: bigint, target: bigint) {
  // revist need to chec if base is primitive root of modulus
  let N: bigint = BigInt(Math.floor(Math.sqrt(Number(modulus))) + 1);

  let giant_step = new Map();
  let result ="";
  for (let i = BigInt(0); i <= N; i++) {
    result += ((target * (inverseModBigInt(base, modulus)**(i*N))) % modulus) + " ";
  }

  return result;
}

export function matchingNumber(base: bigint,modulus: bigint, target: bigint): string {

  // revist need to chec if base is primitive root of modulus
  let N: bigint = BigInt(Math.floor(Math.sqrt(Number(modulus))) + 1);

  let baby_step = new Map();
  let giant_step = new Map();
  for (let i = BigInt(0); i <= N; i++) {
    baby_step.set((base**i) % modulus, i);
    giant_step.set((target * (inverseModBigInt(base, modulus)**(i*N))) % modulus, i);
  }

  
  for (let key of giant_step.keys()) {
    if (baby_step.has(key)) {
      return ("(Matching number: " + key + "), (Baby Step Index: " + baby_step.get(key) + "), (Giant Step Index: " + giant_step.get(key) + ")");
    }
  }

  return "";
}

export function bgComparison(base: bigint, modulus: bigint, target: bigint): string {
  // revist need to chec if base is primitive root of modulus
  let N: bigint = BigInt(Math.floor(Math.sqrt(Number(modulus))) + 1);

  let baby_step = new Map();
  let giant_step = new Map();
  for (let i = BigInt(0); i <= N; i++) {
    baby_step.set((base**i) % modulus, i);
    giant_step.set((target * (inverseModBigInt(base, modulus)**(i*N))) % modulus, i);
  }

  
  for (let key of giant_step.keys()) {
    if (baby_step.has(key)) {
      return ("#(Baby Step Index) + (N * #(Giant Step Index)) => " + baby_step.get(key) + " + (" + N + " * " + giant_step.get(key) + ") = " + (baby_step.get(key) + giant_step.get(key) * N));
    }
  }

  return "";
}
