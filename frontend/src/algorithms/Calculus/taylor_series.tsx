import 'nerdamer';
var nerdamer = require('nerdamer');
require('nerdamer/Calculus');

export function taylorSeries(equation:string,point:string,order:string){ //Takes an equation, the point where the equation is centered, and the order
  //Create an error if order is greater than 10
  //Also create an error if Equation is non-sense
  //Also bundle the solution to an array, with the solution as a string in [0] and linear steps in [1]
    var point1 = Number(point);
    var order1 = Number(order);
    var resultLocal = nerdamer(equation).sub('x',point1);
    var resultFinal = "";
    var count = 0;
    var i = 0
    while (count <= order1-1){
      let c1 = nerdamer('diff(' + equation + ',x,' + i + ')').sub('x',point1).text('decimals'); //Top part of Coefficient
      let c2 = nerdamer('factorial(' + i + ')').text('decimals'); // Bottom Part of Coefficient
      let c3 = nerdamer('x - ' + point1).pow(i).text('decimals'); //Power
      let coefficient = nerdamer("(" + c1 + "/" + c2 + ")" + "(" + c3 + ")").text('decimals'); //Definining Everything
      i++;
      if (coefficient == '0'){
        continue;
      } else{
        count++;
        resultLocal +=  " + " + coefficient;
      }
  }
    resultFinal = nerdamer.convertToLaTeX(resultLocal);
      return resultFinal; //Reworked lets gooooo
  }
