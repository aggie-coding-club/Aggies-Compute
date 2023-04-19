import 'nerdamer';
var nerdamer = require('nerdamer');
require('nerdamer/Calculus');

export function riemann_sum(fnc: string, lwr: number, upr: number, subint: number, type: string) {
  var deltax = (upr - lwr) / subint
  var constdeltax = (upr - lwr) / subint
  var sublist: number[] = [];
  var con1 = lwr
  var con2 = deltax
  if (type == "left") {
    for (let i = 0; i < subint; i++) {
      sublist.push(lwr + deltax);
      deltax += constdeltax
    }
  }
  if (type == "right") {
    for (let i = 0; i < subint; i++) {
      sublist.push(upr - deltax);
      deltax += constdeltax
    }
  }
  if (type == "midpoint") {
    for (let i = 0; i < (subint); i++) {
      sublist.push((con1 + con2) / 2);
      con1 = con2
      con2 += deltax
    }
  }
  var sum: number = 0;
  for (let i = 0; i < (subint); i++) {
    sublist[i]

  }
  return sublist;

}

console.log(riemann_sum("x", 0, 2, 4, "midpoint"));

export function riemann_sum_table(xpoints: number[], ypoints: number[], type: string) {
  if (type == "left") {
    ypoints.splice(-1, 1)
  }
  else if (type == "right") {
    ypoints.splice(0, 1)
  }
  else {
    xpoints = xpoints.filter((element, index) => { return index % 2 == 0 })
    ypoints = ypoints.filter((element, index) => { return index % 2 == 1 })
  }
  var xinterval: number[] = [];
  for (var i = 1; i < xpoints.length; ++i) {
    xinterval.push(xpoints[i] - xpoints[i - 1])
  }
  var sum: number = 0;
  for (var i = 0; i < xinterval.length; ++i) {
    sum += xinterval[i] * ypoints[i]
    // nerdamer(equation).sub('x',point).evaluate();
    return sum;
  }
}

console.log(riemann_sum_table([1, 2, 3, 4, 5, 6, 7], [3, 4, 5, 6, 7, 8, 9], "midpoint"))
