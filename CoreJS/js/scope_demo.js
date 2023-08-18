
var a = 1;

// the following are equivalent:
// console.log(window.a);
// console.log(a);

function testing() {
    var a = 2;
    console.log(`Inside testing(): ${a}`);
}

testing();
console.log(`global: ${a}`);

let b = 3;

if(true) {
    let b = 4;
    console.log(b);
}

console.log(b);

// var is function-scoped
// let and const are block-scoped
