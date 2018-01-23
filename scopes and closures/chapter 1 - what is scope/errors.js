// function foo(a) {
//     console.log(a + b); // Reference error for b
//     b = a;
// }

// foo(2);


function foo(a) {
    b = a; // it creates var a in global scope
    console.log(a + b);
}

foo(2);