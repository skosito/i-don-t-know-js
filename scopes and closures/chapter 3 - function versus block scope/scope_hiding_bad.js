function doSomething(a) {
    b = a + doSomethingElse(a * 2);

    console.log(b*3);
}

function doSomethingElse(a) {
    return a - 1;
}

var b;

doSomething(2); // 15 

// move dosomethingelse into dosomething 
// it is private to that function anyways
// also var b should be in dosomething
// instead of global scope