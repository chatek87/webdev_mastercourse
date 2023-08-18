// IIFE - Immediately Invoking Function Expression
// pronounced 'iffy'
// like a namespace. 

//this is in the global namespace/scope
function greetUser() {
    console.log('hello user');
}

//this is within an IFFY called myNamespace
// an IFFY is also called a 'module' in JS
(function(myNamespace){
    myNamespace.greetUser = function() {
        console.log('Hello User');
    }
    myNamespace.Person = class {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
})(window.myNamespace = window.myNamespace || {});

console.log(window.myNamespace);

greetUser();
myNamespace.greetUser();
const p = new myNamespace.Person('Chuck', 'Tekulve');

console.log(p.lastName);


myName = 'Charlie Frondosa';

(function(app, fullName) {
    app.fullName = fullName;
    app.greetUser = function() {
        console.log(`Hello ${app.fullName}`);
    }
    app.sayGoodbye = function() {
        console.log(`Goodbye sweet ${app.fullName}`);
    }
})(window.app = window.app || {}, myName);

app.sayGoodbye();
