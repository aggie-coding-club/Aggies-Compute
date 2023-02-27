/**
 * Creates a hashmap, with alphabet characters as keys and corresponding numbers as their values.
 *
 *
 * @param x (The alphabet string)
 * @returns (Map<string, string>)
 */

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
