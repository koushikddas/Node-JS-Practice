var inherits = require('util').inherits;

function A(){};
function B(){}; inherits(A,B);
function C(){};

var b = new B();
console.log(b instanceof B);