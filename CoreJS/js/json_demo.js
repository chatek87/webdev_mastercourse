//json demo

//initialize object
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


//delete fullName() method from person object
delete person.fullName;

//methods are not included when stringifying objects to json
//so the above delete line is not strictly necessary, but 
//is included for specificity's sake

const receivedInfo = JSON.stringify(person);

const parsedInfo = JSON.parse(receivedInfo);

console.log(parsedInfo.firstName);

