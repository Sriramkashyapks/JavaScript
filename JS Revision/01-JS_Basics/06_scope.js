const a = 10;
function test() {
    console.log(a); // 10
}
test();

const test2 = () => {
    const b = 20;
    console.log(b);
    console.log(a);
}

// console.log(b); // ReferenceError: b is not defined

test2();


console.log(a);