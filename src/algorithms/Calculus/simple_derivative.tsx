import 'mathjs';
import {isCharNumber} from './helper_Calculus'
var math = require('mathjs');

export function power_rule(f: String, variable: String) {
    let c:number = 1
    let firstchar = Array.from(f)[0];

    if (isCharNumber(firstchar)) {
        c = +firstchar
    }

    let n:number = +f.split('^')[1];
    let coeff:number = n*c;
    let expo:number = n-1;
    return ''.concat(coeff.toString(), variable.valueOf(), '^', expo.toString());
}

export function trig_rules(f: String, variable: String) {
    let trigMap = new Map<String, String>();
    trigMap.set('sin', 'cos');
    trigMap.set('cos', '-sin');
    trigMap.set('tan', 'sec^2');
    trigMap.set('cot', '-csc^2');
    trigMap.set('sec', 'sec*tan');
    trigMap.set('csc','-csc*cot');

    // sin(...)
    // split on '(', get trig function
    // use mapping to get answer
    // format answer
        // if sec or csc
        // trig1 + variable + '*' +  trig2 + variable (secx * tanx)
        // else 
        // trig + variable
    // return answer

    // trig derviative
    var trigFunction:string = f.split("(", 1)[0];
    var trigDeriv = trigMap.get(trigFunction);
    if (trigDeriv === undefined) {
        throw "trig is not defined"
    }

    // formate answer
    if (trigFunction === 'sec' || trigFunction === 'csc') {
        // do stuff
    } else {
        return ''.concat(trigDeriv.valueOf(),'(', variable.valueOf(), ')')
    }
}