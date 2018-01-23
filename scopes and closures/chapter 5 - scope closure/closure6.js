for(var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i); // for is executed before this, so i = 6;
    }, i * 1000);
}

// 6 6 6 6 6 

for(let i = 1; i <= 5; i++) {
    setTimeout(() => { // creates own copy of i
        console.log(i);
    }, i * 1000);
}