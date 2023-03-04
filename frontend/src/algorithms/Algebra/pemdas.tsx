export function f() {
    return;
}

// ALGORITHM
// parse input string with math.parse("expression")
// recursively run through expression tree generated with math.parse
//  If the current node has children, run the operator check on the children node
//  If the current node is an operator, and both children are either constants or constants and symbols (no operators), perform the single operation
//      and pass to the result to the parent node
//  print the current state of the expression tree (should be the same as the previous, but with the correct next step taken)
//  continue until entire expression tree has been handled 