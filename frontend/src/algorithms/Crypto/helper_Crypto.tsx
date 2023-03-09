import { getJSDocDeprecatedTag } from "typescript";

export function char_map(x: string): Map<string, string> {
  // Checks if string is empty
  if (x.length === 0) {
    throw Error('Cannot have an alphabet with length zero');
  }

  // Creates hashmap to return <"char", "number">
  let hashmap = new Map<string, string>();

  // Removes all whitespace from string
  let alphabet: string = x.replace(/\s/g, '');

  // Determines length of "numSpace" when mapping
  // alphabet: abc, a->0 b->1 c->2, numSpace = 1
  // alphabet: abc..xyz, a->00 b->01 c->02 ... x->23 y->24 z->25, numSpace = 2
  let lowBound: number = 1;
  let upBound: number = 10;
  let numSpace: number = 1;
  while (!(lowBound <= alphabet.length && alphabet.length <= upBound)) {
    lowBound *= 10;
    upBound *= 10;
    numSpace += 1;
  }

  // Puts alphabet into hashmap
  for (let i: number = 0; i < alphabet.length; i++) {
    // Adds leading zeroes to number
    let num: string = i.toString();
    while (num.length < numSpace) {
      num = '0' + num;
    }

    // Checks for multiple elements
    if (hashmap.has(alphabet[i])) {
      throw Error('Cannot have duplicate elements in alphabet');
    }

    // Adds into hashmap
    hashmap.set(alphabet[i], num);
  }

  return hashmap;
}

/**
 * Creates a hashmap, with numbers as keys and corresponding alphabet characters as their values
 *
 * @param x (The alphabet string)
 * @returns (Map<string, string>)
 */
export function inverse_char_map(x: string): Map<string, string> {
  let hashmap = char_map(x);
  let invMap = new Map<string, string>();

  hashmap.forEach((value, key) => invMap.set(value, key));
  return invMap;
}

/**
 * Creates a corresponding string from a number depending on length
 *
 * @param num (The number to change to a string)
 * @param len (Length of desired output string)
 * @returns (string)
 */
export function num_to_key(num: number, len: number): string {

  // Checks if they're whole numbers
  if (Math.floor(num) !== num || Math.floor(len) !== len){
    throw Error("Either num or len cannot be a decimal number");
  }

  // Checks if num is negative
  if (num < 0){
    throw Error("num cannot be negative");
  }

  // Checks if len <= 1
  if (len <= 0){
    throw Error("len cannot be less than one");
  }

  let s: string = num.toString();

  // Checks if number has a larger length than len
  if (s.length > len){
    throw Error("number cannot have a larger length than len");
  }

  // Appends leading zeroes
  while (s.length < len){
    s = '0' + s;
  }

  return s;
}

/**
 * Calculates the greatest common denominator between two integers
 *
 * @param a (Some integer)
 * @param b (Some integer)
 * @returns (integer)
 */
export function GCD(a: number, b: number): number {
  // Check that a and b are decimal
  if (Math.floor(a) !== a || Math.floor(b) !== b){
    throw Error("a and b have to both be integers");
  }

  // Check that a and b are positive
  if (a <= 0 || b <= 0){
    throw Error("a and b have to both be positive");
  }

  let r: number = a % b;

  if (r === 0){
    return b;
  }

  else{
    return GCD(b, r);
  }
}

/**
 * Calculates the modular inverse of a number
 *
 * @param a (Some integer)
 * @param b (Some integer)
 * @returns (integer)
 */
export function inverseMod(a: number, modulo: number): number {

  // Check if their GCD is 1
  if (GCD(a, modulo) !== 1){
    throw Error("gcd(a, modulo) must be equal to 1");
  }

  let c: number = 1;

  // Checks if divisible by a
  while (c % a !== 0){
    c += modulo;
  }
  
  return c / a;
}

/**
 * Returns the prime factors of a number, p
 *
 * @param p (a number)
 * @returns (Array<bigint>)
 */
export function primeFactors(p: bigint): Array<bigint> {

  if (p < 2){
    throw Error("p must be larger than 2")
  }

  let factors: Array<bigint> = [];
  let div: bigint = BigInt(2);

  while (p >= 2) {

    if (p % div === BigInt(0)) {
      factors.push(div);
      p = p / div;
    }

    else{
      div++;
    }
  }

  return factors;
}


/**
 * Returns true or false whether or not a number is prime
 *
 * @param p (a number)
 * @returns (boolean)
 */
export function isPrime(p: bigint): boolean {
  if (primeFactors(p).length === 1) {
    return true;
  }

  else{
    return false;
  }
}





/**
 * Returns true or false whether or not a number is a primitive root mod p
 *
 * @param a (checked value for primitive root)
 * @param p (modulus)
 * @returns (boolean)
 */
export function isPrimRoot(a: bigint, p: bigint): boolean {

  // Check p is a prime
  if (!isPrime(p)){
    throw Error("p has to be a prime")
  }

  // Check if a is positive
  if (a < BigInt(2)){
    throw Error("a has to be greater than or equal to 2")
  }

  // Creates hashmap for used bigints
  let hashmap = new Map<bigint, bigint>();

  // Brute force algo, stores values in hashmaps and checks for duplicates
  for (let i: bigint = BigInt(0); i < p - BigInt(1); i++){

    let num: bigint = BigInt(5);
    // (a**i) % p;

    if (hashmap.has(num)){
      return false;
    }

    else{
      hashmap.set(num, num);
    }
  }

  

  


  return true;
}