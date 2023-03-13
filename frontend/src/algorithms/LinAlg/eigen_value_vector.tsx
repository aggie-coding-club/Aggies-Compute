import 'mathjs';
var math = require('mathjs');
const nerdamer = require('nerdamer/all.min');

export function eigen_value_vector() {
  //   const parser = math.parser();
  let eqn1 = math.parse('x+y');
  let eqn2 = math.resolve(eqn1, { x: 1 });
  let eqn3 = math.resolve(eqn1, { x: 3 });
  //   console.log(math.resolve(eqn1, { x: 1 }).toString());
  console.log(eqn2.toString());
  console.log(eqn3.toString());
  let mult = new String(' * ');
  let eqn5 = ''.concat(
    '(',
    eqn2.toString(),
    ')',
    mult.toString(),
    '(',
    eqn3.toString(),
    ')'
  );
  console.log(eqn5);

  var sol = nerdamer.solve(eqn5, 'y');
  console.log(sol.text());
}
