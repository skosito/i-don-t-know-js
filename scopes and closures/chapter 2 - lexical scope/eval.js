function foo(str, a) {
    eval(str);
    console.log(a + b); // b is 3 because scope is modified with eval ('var b = 3')
}

var b = 2;

foo('var b = 3;', 2);