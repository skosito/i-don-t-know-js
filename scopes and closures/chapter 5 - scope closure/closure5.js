function wait(msg) {
    setTimeout(() => {
        console.log(msg);
    }, 1000);
}

wait('Hello closure');