var _ = require('lodash');

var people = [
	{ id: 1, name: "Jim", age: 20, gender: 'm', enabled: true },
	{ id: 1, name: "Jim", age: 20, gender: 'm', enabled: false },	
	{ id: 2, name: "Bob", age: 34, gender: 'm', enabled: true },
	{ id: 3, name: "Steve", age: 30, gender: 'm', enabled: true },
	{ id: 4, name: "Nancy", age: 42, gender: 'f', enabled: true },
	{ id: 5, name: "Frank", age: 30, gender: 'm', enabled: true },
	{ id: 6, name: "Larry", age: 68, gender: 'm', enabled: true },
	{ id: 7, name: "Larry Jr", age: 28, gender: 'm', enabled: true },
	{ id: 8, name: "Sally", age: 24, gender: 'f', enabled: true },
	{ id: 9, name: "Wanda", age: 22, gender: 'f', enabled: true },
	{ id: 10, name: "John", age: 24, gender: 'm', enabled: true },
	{ id: 11, name: "Bill", age: 24, gender: 'm', enabled: true },
	{ id: 12, name: "Kelly", age: 25, gender: 'f', enabled: true },
	{ id: 13, name: "Donna", age: 26, gender: 'f', enabled: true }
];

var sumOfAges = _.sum(_.map(people, 'age'));

console.log(sumOfAges);