function doSomething(a) {
    function doSomethingElse(a) {
        return a - 1;
    }

    b = a + doSomethingElse(a * 2);
    
    var b;

    console.log(b*3);
}

doSomething(2); // 15 