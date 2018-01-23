var foo = true;

if(foo) {
    var a = 2;
    const b = 3; // block scope but can not be changed

    a = 3;
    b = 4; // error
}

console.log(a); // 3
console.log(b); // reference error