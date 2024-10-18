// Task 1

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (prop of dairy) {
        console.log(prop)
    }
}
logDairy();

// Task 2

const animal = {

    canJump: true
    
};
    
const bird = Object.create(animal);
    
    bird.canFly = true;
    bird.hasFeathers = true;

function birdCan() {
    for (var key of Object.keys(bird)) {
        console.log(key, ": ", bird[key])
    }
}
birdCan();


// Task 3

function animalCan() {
    for (var key in bird) {
        console.log(key, ": ",bird[key])
    }
}
animalCan();

// JavaScript Learning Sheet

/* 
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);
*/

/* Binary conditions (either true or false) */

/*
if (condition == true) {
    //execute this
}

*/

/* 
    equal to ==
    greater than >
    less then <
    not equal !=
*/

/* ELSE IF */

/* 
var place = 'first';

if (place == 'first') {
    console.log('Gold')
} else if (place == 'second') {
    console.log('Silver')
} else if (place == 'third') {
    console.log('Bronze')
} else {
    console.log('No medal')
}
*/

// Switch Statement 

/* Switch and Conditional Statements can be used to execute 
code based on a certain condition being either true or false.*/

/* 
switch (place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
}
*/


/* Complete the following steps to create: Are You Old Enough? 
Declare a variable age using the var keyword and set it to the number 10.

Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension".

Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".

Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, "type console.log" and then "You get an allowance".

Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical".

Try adjusting the age and executing the program to see how it will affect the output. */

/* 
var age = 10;
if (age >= 65) {
    console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
    console.log('Each month you get a salary')
} else if (age > 18) {
    console.log('You get an allowance')
} else {
    console.log('The value of the age variable is not numerical')
}
*/

/* Code the days of the week program as a switch statement
On the next line, define a new variable, name it day, and set its value to "Sunday".

Start coding a switch statement, passing the day variable as the expression to evaluate.

Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. 
Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

Finally, update the console.log calls for each case, based on whatever activity you have on each of the days. */

/* 
var day = 'Sunday';
switch (day) {
    case 'Monday':
        console.log('Study JavaScript');
        break;
    case 'Tuesday':
        console.log('Study Math');
        break;
    case 'Wednesday':
        console.log('Study JavaScript');
        break;
    case 'Thursday':
        console.log('Study graphic computing');
        break;
    case 'Friday':
        console.log('More JavaScript');
        break;
    case 'Saturday':
        console.log('Workout & rest');
        break;
    case 'Sunday':
        console.log('Rest');
        break;
    default:
        console.log('There is no such day!');

}
*/

/* For loop:

set the value - (for example: var i = 1)
specify the condition - (for example: i<4)
increment the counter - (for example: i++)

*/
/* 
for (var i = 1; i < 4; i++) {
    console.log(i);
}
console.log('Go!');
*/

// While loop 

/* 
var counter = 10;

while (counter > 0) {
    console.log(counter);
    counter = counter - 1;
} console.log('Happy New Year');

*/

/* 

    function addTaxToPrices (taxRate, ...itemsBought) {
        return itemsBought.map(item => taxRate * item)
    }

    let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);

    console.log(shoppingCart)

*/

/*
JSON 

const jsonStr = {"greeting":"hello"}

JSON.parse(jsonStr)

const aPlainObj = JSON.parse(jsonStr)

aPlainObj.greeting = "hi"

*/

/* 

function addFive(val) {
    return val + 5;
};

module.exports = addFive;
*/