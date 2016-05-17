// types
var greet : string = 'hello';
// no default globals -- variables must be delcared before use

//ambient variables - external variables i don't define e.g. jquery $
declare var $; //compiler hint only
//alert($);

// logical comparison operators
var a = 1;
var b = '1';
//console.log(a == b); // error - no coalescing => no need to use === in typescript

// enforces function argument count
var add = function(op1: number, op2:number, op3:number = 0, op4?:number) { // default-value and ?optional params
    var sum = op1 + op2 + op3;
    if (op4) {
        sum += op3;
    }
    return sum;
}
console.log(add(1, 1));
console.log(add(1, 1, 1));
console.log(add(1, 1, 1, 1));

// declare variadic args - ...rest parameters
var multiHello = function(...names: string[]) {
    console.log('Hello ' + names.join(', '));
}
multiHello('matt', 'rajesh');

var hello = function(name: string, callback:(msg: string) => string) {
    console.log(callback('hello ' + name));
}
hello('matt', function(msg:string) : string {
    console.log(msg);
    return 'returning...';
});

