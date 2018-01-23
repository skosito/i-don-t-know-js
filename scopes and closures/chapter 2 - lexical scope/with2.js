function foo(obj) {
    with(obj) {
        a = 2;
    }
}

var o1 = {
    a: 3
};

var o2 = {
    b: 3 // doesn't have a, but with will create lexical scope, and it will create a in global scope
         // because it doesn't find it in this newly created scope
};

foo(o1);
console.log(o1.a); // 2

foo(o2);
console.log(o2.a); // undefined
console.log(a); // 2 
