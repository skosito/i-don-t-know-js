var foo = true;

function something(a) {
    return a;
}

if(foo) {
    let bar = foo * 2; // bar is scoped to if block
    bar = something(bar);
    console.log(bar);
}

console.log(bar); // Reference error


{
    console.log(bar); // Reference error, no hoisting!
    let bar = 2;
}