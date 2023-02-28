/**
 * Creates a hashmap, with alphabet characters as keys and corresponding numbers as their values.
 *
 *
 * @param x (The alphabet string)
 * @returns (Map<string, string>)
 */

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


