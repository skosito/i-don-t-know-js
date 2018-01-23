function CoolModule(id) {
    function identify() {
        console.log(id);
    }

    return {
        identify: identify
    };
}

var foo1 = CoolModule('foo1');
var foo2 = CoolModule('foo2');

foo1.identify();
foo2.identify();