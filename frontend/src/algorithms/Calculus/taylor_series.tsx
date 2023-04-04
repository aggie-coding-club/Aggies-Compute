import 'nerdamer';
var nerdamer = require('nerdamer');
require('nerdamer/Calculus');

export function TaylorSeries(equation:string,point:number,order:number){ //Takes an equation, the point where the equation is centered, and the order
    var resultLocal = nerdamer(equation).sub('x',point).evaluate();
    var resultFinal = "";
    var count = 0;
    var i = 0
    while (count <= order-1){
      let c1 = nerdamer('diff(' + equation + ',x,' + i + ')').sub('x',point).evaluate().text('decimals'); //Top part of Coefficient
      let c2 = nerdamer('factorial(' + i + ')').evaluate().text('decimals'); // Bottom Part of Coefficient
      let c3 = nerdamer('x - ' + point).pow(i).evaluate().text('decimals'); //Power
      let coefficient = nerdamer("(" + c1 + "/" + c2 + ")" + "(" + c3 + ")").evaluate().text('decimals'); //Definining Everything
      i++;
      if (coefficient == '0'){
        continue;
      } else{
        count++;
        resultLocal +=  " + " + coefficient;
      }
  }
    resultFinal = nerdamer.convertToLaTeX(resultLocal);
      return resultFinal; //Returns a somewhat simplified version of the power series (Know how to rework the entire thing lmao)
  }
