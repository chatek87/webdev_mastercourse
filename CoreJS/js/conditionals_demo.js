// let x = 1;
// let y = 2;
// let result = 0;

// result = x / y;

//the following are equivalent:
// result = result + x;
// result += x;

// result++;

// let result = new Date('September 15, 1990');

// console.log(result);

// const firstName = 'Chuck';
// const lastName = 'Tek';

// // console.log(firstName + ' ' + lastName);
// console.log(`Hello ${firstName} ${lastName}`);

// const people = ['Chuck', 'Bub', 'Mary', 'Steve'];

// //print all elements
// console.log(people);

// //print second element
// console.log(people[1]);

// //add element to end of array
// people.push('Leeloo');
// console.log(people);

// //remove last element from array and store in variable
// const lastPerson = people.pop();

// console.log(lastPerson);

// //get index of element
// console.log(people.indexOf('Bub')); //exists in array
// console.log(people.indexOf('Bib')); //doesn't exist in array, returns -1

// //check whether variable is array
// console.log(Array.isArray(people));

// console.log(lastPerson.startsWith('J'));

// people.push('Tom');
// people.push('Tammy');
// people.push('Barry');


// const coolPeople = people.filter(function(person){
//     return person.startsWith('T') === true;
// });
// console.log(coolPeople);

// const notCoolPeople = people.filter(function(person){
//     return !person.startsWith('T') == true;
// });
// console.log(notCoolPeople);

// console.log(lastPerson.substring(1, 5));

// const firstLetters = people.map(function(person) {
//     return person.substring(0,1);
// });

// console.log(firstLetters);

/////////////////////////////////////////////////////////////////////////////
///////////////////conditionals/////////////////////////////////////////////

const myFirstName = 'John';
const myLastName = 'Humback';

if (myFirstName.toLowerCase().startsWith('j') && myLastName.toLowerCase().startsWith('h')){
    console.log('It appears that you might be a bitch...');
}

if (myFirstName.toLowerCase() === 'john' && myLastName.toLowerCase() === 'humbach') {
    console.log('Hello Bitch');
} else if (myFirstName.toLowerCase() === 'john'){
    console.log('There can only be one John. You ain\'t, fool.');
} else {
    console.log(`Hello ${myFirstName}`);
}


//must use === in JS rather than ==
const x = '1';
const y = 1;

if (x == y) {
    console.log('The two values are equal');
}
else {
    console.log('The two values are not equal');
}

if (x === y) {
    console.log('The two values are equal');
}
else {
    console.log('The two values are not equal');
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////s//////////w/////////i////t/////c/////h////////////////
const day = 'Tuesday';

switch (day) {
    case 'Monday':
        console.log('Looks like you\'ve got a case of the Mondays : /');
        break;
    case 'Tuesday':
        console.log('\"Tuesday has a feel.\"  - Cosmo Kramer');
        break;
    case 'Thursday':
        console.log('Named for the Viking god Thor, Thursday is blah blah blah');
    default:
        console.log('The rest of the days don\'t matter.');
        break;
}