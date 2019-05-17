// New ways of declaring variables

// ES5
/*var name5 = 'Ruben Mano';
var age5 = 22;
name5 = 'Cintia Pasto';
console.log(name5);

// ES6
// In ES6 var is no longer used and it's replaced by const if the variable does not change
// or let if the variable can change
const name6 = 'Ruben Mano';
let age6 = 22;
// The next line has an error if the variable name6 is declared as const
// name6 = 'Cintia Pasto';
console.log(name6);

// ES5
function driversLicense5(passedTest) {
    if (passedTest){
        var firstName = 'John Smith';
        var yearOfBirth = 1990;
    }
    // this works because the variables are function scope
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');

}

driversLicense5(true);

// ES6
function driversLicense6(passedTest) {
    // The Problem 
    /*if (passedTest){
        let firstName = 'John Smith';
        const yearOfBirth = 1990;

    }
    // this does not work because the variables are block scoped
    // A block is all the code wrapped within the curly braces
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
    

    // The solution
    // Declare the variables in the scope of the console.log();
    let firstName;
    // The const is declared outside
    const yearOfBirth = 1990;
    if (passedTest){
        firstName = 'John Smith';

    }
    // this does not work because the variables are block scoped
    // A block is all the code wrapped within the curly braces
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
    
}

driversLicense6(true);*/

// Strings
let firstName = 'John';
let lastName = 'Smith';
const year = 1990;

function calcAge(year){
    return 2019 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + year + '. Today he is ' + calcAge(year) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${year}. Today he is ${calcAge(year)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('J'));
console.log(n.includes('J'));
// repeats the first name x times
console.log(`${firstName} `.repeat(3));

