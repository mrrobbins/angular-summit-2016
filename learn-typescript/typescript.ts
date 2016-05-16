var arry = [1, 2];

function add(first, second) {
    return first + second;
}

console.log(add(1,2));
/*console.log(add(...arry));*/

interface Vechicle {
    wheels:number;
    towing:boolean;
}

class Truck implements Vechicle {
    length:number;

    constructor(public wheels:number, public towing:boolean) {}

}

console.log(
`Truck has below number of wheels:
${new Truck(18, false).wheels}`
);