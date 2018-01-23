function CoolModule() {
    var sth = 'cool';
    var ant = [1, 2, 3];

    function doSomething() {
        console.log(sth);
    }

    function doAnother() {
        console.log(ant.join(' ! '));
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    }
}

var foo = CoolModule();
foo.doSomething();
foo.doAnother(); 