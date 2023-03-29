import 'nerdamer';
var nerdamer = require('nerdamer');
require('nerdamer/Calculus');

export function TaylorSeries(equation:string,point:number,order:number){ //Takes an equation, the point where the equation is centered, and the order
    var resultLocal = nerdamer(equation).sub('x',point).evaluate();
    var resultFinal = "";
    var count = 0;
    var i = 0
    while (count <= order-1){
      let c1 = nerdamer('diff(' + equation + ',x,' + i + ')').sub('x',point).toString(); //Top part of Coefficient
      let c2 = nerdamer('factorial(' + i + ')').toString(); // Bottom Part of Coefficient
      let c3 = nerdamer('x - ' + point).pow(i).toString(); //Power
      let coefficient = nerdamer("(" + c1 + "/" + c2 + ")" + "(" + c3 + ")").evaluate().toString(); //Definining Everything
      i++;
      if (coefficient == '0'){
        continue;
      } else{
        count++;
        resultLocal +=  " + " + coefficient;
      }
  }
    resultFinal = nerdamer.convertToLaTeX(resultLocal);
    var test = resultFinal.replaceAll(" 0 + ",'');
    test = test.replaceAll("0 + ",'');
    test = test.replaceAll("+ 0",'');
      return test; //Reworked it lol L L
  }