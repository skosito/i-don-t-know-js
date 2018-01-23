function foo(a) {
    console.log(a + b); // it looks for b in outer scope, in this case global
}

var b = 2;
foo(2); // 4


function foo(a) {
    console.log(a + b);
}

foo(2);