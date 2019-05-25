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

driversLicense6(true);

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

// Arrow Functions
const years = [1990, 1996, 1991, 1997, 1995];

// ES5
var ages5 = years.map(function(el){
    return 2019 - el;
});
console.log(ages5);

// ES6
// With one arg
let ages6 = years.map(el => 2019 - el);
console.log(ages6);

// With two args
ages6 = years.map((el, index) => `Age element ${index + 1} : ${2019 - el}.`);
console.log(ages6);

// With more tha one line of code
// use curly braces
// Use the return keyword
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1} : ${age}.`;
});
console.log(ages6);

// Lexical This Keyword
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is ' + self.color + '.';
            alert(str);
        });
    }
}

box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', () => {
            let str = 'This is box number ' + this.position + ' and it is ' + this.color + '.';
            alert(str);
        });
    }
}

box6.clickMe();

function Person(name){
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el + '.';
    }.bind(this));
    console.log(arr);
}

var friends = ['John', 'Jane', 'Mark'];
new Person('Ruben').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends){
    let arr = friends.map( el => `${this.name} is friends with ${el}.`);
    console.log(arr);
}

const friends6 = ['John', 'Jane', 'Mark'];
new Person('Ruben').myFriends6(friends6);

// Destructuring
// ES5
var john = ['John', 23];
var nam = john[0];
var ag = john[1];

// ES6
const [name, age] = ['John', 23];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

// It is possible to use diferent names
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

// One of it's applications is to return elements in a function
function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [ageR, retirement] = calcAgeRetirement(1996);
console.log(ageR);
console.log(retirement);

// Arrays
const boxes = document.querySelectorAll('.box');

// ES5 
var boxesArr5 = Array.prototype.slice.call(boxes);
// change the color of the boxes
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

// ES6
// It will put all the boxes into the array
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'yellow');
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'yellow');

// Loop over
// ES5
for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        continue;
    }
    boxesArr5[i].textContent = 'I changed color!';
}

// ES6
for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed sex';
}

// ES5
var ageArr = [12, 14, 23, 15, 17];
var full = ageArr.map(function(cur){
    return cur >= 18;
})

console.log(full);
console.log(full.indexOf(true));
console.log(ageArr[full.indexOf(true)]);

// ES6
console.log(ageArr.findIndex(cur => cur >= 18));
// There's no need to calculate the index
console.log(ageArr.find(cur => cur >= 18));

// The spread Operator
// It's good to extpand elements of an array in functions 
function addFourAges(a, b, c, d){
    return a + b + c + d;
}

var sum1 = addFourAges(18, 22, 23, 24);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
// This is the spread operator ... and expands the array
const max = addFourAges(...ages);
console.log(max);

const familyMano = ['Pedro', 'Ligia', 'Ruben'];
const familyM = ['Graca', 'Antonio', 'MM'];

const bigFam = [...familyMano, ...familyM];
console.log(bigFam);

// because it's selected jus by the name there's no need for the # or the .
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
// put all the elements in the same structure
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');

// Rest Parameters
// Receive single values and transforms into an array

// ES5
function isFullAge5(){
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    console.log(argsArr);
    argsArr.forEach(function(cur){
        console.log((2019 - cur) >= 18);  
    })
}

isFullAge5(1990, 1996, 2000);
isFullAge5(1990, 1996, 2000, 2016, 2019);

// ES6
// It will receive single args and pass them as an array into the function
function isFullAge6(limit, ...years){
    console.log(years);
    years.forEach(cur => console.log((2019 - cur) >= limit));
};

isFullAge6(16, 1990, 1996, 2000);
isFullAge6(16, 1990, 1996, 2000, 2016, 2019);

// Default Parameters
// ES5
function smithPerson(firstName, yearOfBirth, lastName, nationality){

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'Portuguese' : nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new smithPerson('John', 1996);
var emily = new smithPerson('Emily', 2000, 'Diaz', 'Spain');

// ES6
function sebPerson(firstName, yearOfBirth, lastName = 'Seb', nationality = 'American'){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

let jonh = new sebPerson('John', 1996);
let em = new sebPerson('Em', 2000, 'Diaz', 'Spain');

// Maps - new key-value data structure

const question = new Map();
// New key value pair
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong! Please try again!');

// Retrieve values
console.log(question.get('question'));
// Get the size of the map
// console.log(question.size);

// Remove an element
question.delete(4);

// check if an element is in the map
if(question.has(4)){
    console.log('It has!');
}

// Clear everything from the map
// question.clear();

// looping through a map
// question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`)); 

for(let [key, value] of question.entries()){
    // to access the value it's necessary to destructuring
    if(typeof(key) === 'number'){
        console.log(`Answer ${key} : ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));

// Classes
// ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john = new Person5('John', 1996, 'Student');

// ES6
// In class definition there is no need for ponctuation
class Person6 {
    // all classes need to have the constructor method
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const manel = new Person6('Manel', 1990, 'Lazy');
// manel can't call greeting class because of inheritance
Person6.greeting();

// Subclasses: Example of Inheritance

// ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

var john = new Athlete5('John', 1990, 'swimmer', 3, 10);
john.calculateAge();

// ES6
class Person6 {
    // all classes need to have the constructor method
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const manel = new Athlete6('Manel', 1990, 'swimmer', 3, 10);
manel.wonMedal();
manel.calculateAge();*/

// Challenge

class Elements {
    constructor(name, buildYear){   
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Parks extends Elements {
    constructor(name, buildYear, area, trees){
        super(name, buildYear);
        this.trees = trees;
        this.area = area;
    }

    calcDensity(){
        const dens = this.trees / this.area;
        console.log(`${this.name} has a tree density of ${dens} trees per square km.`);
    }
}

class Streets extends Elements {
    constructor(name, buildYear, length, size = 3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear} is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [
    new Parks('Green Park', 1987, 0.2, 215),
    new Parks('National Park', 1894, 2.9, 3541),
    new Parks('Oak Park', 1953, 0.4, 949)
];

const allStreets = [
    new Streets('Ocean Avenue', 1999, 1.1, 4),
    new Streets('Evergreen Street', 2008, 2.7, 2),
    new Streets('4th Street', 2015, 0.8),
    new Streets('Sunset Boulevard', 1982, 2.5, 5)
];

function calc(arr){
    const sum = arr.reduce((previous, current) => previous + current, 0);
    return [sum, sum / arr.length];
}

function reportParks(p){
    console.log('-------------PARK REPORTS-------------');
    
    // Density
    p.forEach(el => el.calcDensity());

    // Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    console.log(ages);
    const [totalAge, avAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avAge} years.`);

    // Which park has more than 1000 trees
    const i = p.map(el => el.trees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 100 trees`);
}

function reportStreets(s){
    console.log('------------STREETS REPORTS-----------');
    const [totalLength, avLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} have a total length of ${totalLength} km and an average length of ${avLength} km.`);

    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);