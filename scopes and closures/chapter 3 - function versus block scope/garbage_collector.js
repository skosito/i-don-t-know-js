function process(data) {
    // ...
}

{ // because using let this can get garbage collected earlier
    let someReallyBigData = { };
    process(someReallyBigData);
}

var btn = document.getElementById('my_btn');

btn.addEventListener('click', function click(evt) {

});