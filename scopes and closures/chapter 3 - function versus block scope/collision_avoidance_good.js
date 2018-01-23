function foo() {
    function bar(a) {
        var i = 3; // declare i here also
        console.log(a+i);
    }

    for(var i = 0; i < 10; i++) {
        bar(i * 2);
    }
}

foo();