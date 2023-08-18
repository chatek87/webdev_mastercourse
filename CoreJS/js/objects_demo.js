//objects demo

const person = {
    firstName: 'Tim',
    lastName: 'Corey',
    age: 42,
    isAlive: true,
    address: {
        city: 'Dallas',
        state: 'TX'
    },
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// console.log(person.firstName, person.address.city);

// console.log(person.fullName());


// function test() {
//     return this;    //'this' here referrs to the global scope, bc it's not in an object
// }
// console.log(test());

// function greetUser(p) {
//     console.log(`Hello there ${p.fullName()}`);
// }

// greetUser(person);


// //Deconstruction
// const { firstName:fn, age, address: {city}} = person;
// console.log(fn);

//same as:
/*
const fn = person.firstName;
const age = person.age;
const city = person.address.city;
*/

//for in
// for (const prop in person) {
//     if (person.hasOwnProperty(prop)) {
//         console.log(`${prop}: ${person[prop]}`);  
//     }
// }




