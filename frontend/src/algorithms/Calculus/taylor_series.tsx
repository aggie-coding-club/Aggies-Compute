import 'nerdamer';
var nerdamer = require('nerdamer');
require('nerdamer/Calculus');

export function TaylorSeries(equation:string,point:number,order:number){ //Takes an equation, the point where the equation is centered, and the order
    var resultLocal = nerdamer(equation).sub('x',point).evaluate();
    var resultFinal = "";
    for (var i = 1; i <= order; i++){    
      let c1 = nerdamer('diff(' + equation + ',x,' + i + ')').sub('x',point).toString(); //Top part of Coefficient
      let c2 = nerdamer('factorial(' + i + ')').toString(); // Bottom Part of Coefficient
      let c3 = nerdamer('x - ' + point).pow(i).toString(); //Power
      let coefficient = nerdamer("(" + c1 + "/" + c2 + ")" + "(" + c3 + ")").evaluate().toString(); //Definining Everything
      resultLocal += " + " + coefficient;
    }
    resultFinal = nerdamer.convertToLaTeX(resultLocal);
    var test = resultFinal.replaceAll(" 0 + ",'');
    test = test.replaceAll("0 + ",'');
    test = test.replaceAll("+ 0",'');
      return test; //Returns a somewhat simplified version of the power series
  }
