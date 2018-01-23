a = 2;
var a;

console.log(a); // 2
////////////////////////////////////
console.log(b); // undefined

var b = 3;
////////////////////////////////////

foo();

function foo() {
    console.log(a); // undefined
    var a = 2;
}
////////////////////////////////////
foo(); // Type error

var foo = function bar() {

};
////////////////////////////////////
foo(); // type error
bar(); // reference error

var foo = function bar() {

};

// function declarations are hoisted above variable declarations
// function exp are not hoisted (they are assigments)
foo(); // 1

var foo;

function foo() {
    console.log(1);
}

foo = function() {
    console.log(2);
}