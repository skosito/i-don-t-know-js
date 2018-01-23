var foo = (function CoolModule(id){
    function change() {
        publicApi.identify = identify2;
    }

    function identify1() {
        console.log(id);
    }

    function identify2() {
        console.log(id.toUpperCase());
    }

    var publicApi = {
        identify: identify1,
        change: change
    };

    return publicApi;
})('foo module');

foo.identify();
foo.change();
foo.identify();