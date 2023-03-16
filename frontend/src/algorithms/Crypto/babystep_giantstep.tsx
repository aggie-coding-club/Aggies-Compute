import 'mathjs';
import {
  extended_euclidean_algorithm,
  sussesive_squaring_mod
} from './helper_Crypto';
var math = require('mathjs');

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
  base: number,
  modulus: number,
  target: number
) {
  if (!math.isPrime(modulus)) {
    throw Error('modulus must be prime');
  }

  // revist need to chec if base is primitive root of modulus
  let N = math.ceil(math.sqrt(modulus));
  let base_inverse = extended_euclidean_algorithm(base, modulus)[1];
  let base_inverse_N = sussesive_squaring_mod(base_inverse, N, modulus);

  let baby_step = new Map();
  let giant_step = new Map();
  for (let i = 0; i <= N; i++) {
    baby_step.set(sussesive_squaring_mod(base, i, modulus), i);
  }
  for (let j = 0; j <= N; j++) {
    giant_step.set(sussesive_squaring_mod(base_inverse_N, j, modulus), j);
  }
  for (let key of giant_step.keys()) {
    if (baby_step.has(key)) {
      return baby_step.get(key) + giant_step.get(key) * N;
    }
  }
}
