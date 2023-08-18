
class Person {
    #social;

    constructor (fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    //equivalent one-liner:
    //getFullName = () => `${this.firstName} ${this.lastName}`;

    get ssn() {
        return `***-**-${this.#social.substr(this.#social.length - 4)}`;
    }
    set ssn(social) {
        this.#social = social;
    }
}

const person1 = new Person('Charlie', 'Tekulve');
const person2 = new Person('Bub', 'McStubbins');

console.log(person1.firstName);
console.log(person2.firstName);

person1.ssn = '123-12-1234';

console.log(person1.ssn);
console.log(person1.social);    //can't be accessed outside the class bc marked private field

console.log(person2.getFullName());