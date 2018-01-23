function foo() {
    function bar(a) {
        i = 3;
        console.log(a+i);
    }

    for(var i = 0; i < 10; i++) {
        bar(i * 2); // infinite loop, bar always sets i to 3, var is declared here in foo
    }
}

foo();