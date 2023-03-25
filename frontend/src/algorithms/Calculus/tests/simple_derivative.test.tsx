import { power_rule, trig_rules } from "../simple_derivative"

test('power_rule_test_1', () =>{
    var f: String = "2x^4"; 
    var variable: String = 'x'
    var result = power_rule(f, variable);
    var answer = "8x^3"
    expect (result === answer);
})
test('trig_rule_test_1', () =>{
    var f:String = 'sin(x)';
    var variable:String = 'x';
    var result = trig_rules(f, variable);
    var answer = 'cos(x)';
    expect(result).toBe(answer);
})