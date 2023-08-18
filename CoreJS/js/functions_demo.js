// function add(x, y) {
//     return x + y;
// }

// console.log(add(2,4));

// function greetUser(name) {
//     console.log(`'Hello ${name}'`);
// }

// greetUser('Jimmy');

const subtract = (x, y) => {
    return x - y;
}
console.log(subtract(5,3));


const subtractOneLine = (x, y) => x - y;
console.log(subtractOneLine(6,3));


const ppl = ['Tim', 'Sue', 'Tammy'];

// //this is the full syntax:
// pplFiltered = ppl.filter(function(p) {
//     return p.substr(0,1) === 'T';
// })

//this is equivalent but more succinct:
const pplFiltered = ppl.filter(p => p.substring(0,1) === 'T');


console.log(pplFiltered);
