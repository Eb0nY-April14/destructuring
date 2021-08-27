/**
 * To run this file in Gitpod, use the 
 * command "node destructuring.js" in the terminal
 */

/* Destructuring gives us a faster way to take an array 
of items & turn them into distinct individual variables */

/* Without Using Destructuring. We have to declare each 
variable individually on its own line of code & we also
have to reference the index of the item in the array we
want to assign to each variable */
// let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
// console.log(john, mary, joe);

// Destructuring arrays
let ages = [30, 26, 27];
/* By putting square brackets on the left side of the expression,
 ES6 understands that you are trying to create 3 separate variables
 using destructuring */
let [john, mary, joe] = ages; 
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};

/* By putting curly braces on the left side of the expression,
 ES6 understands that you are trying to create 3 separate variables
 using destructuring */
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets. This is how to destructure only a subset of an array or object.
/* Array Destructuring Example */
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages; /* The 1st 2 values of the array are assigned to the 2 variables & the rest of the array is ignored */
console.log(johnNative, johnSecondary);

/* To assign the 3rd & 4th values in the languages array to Mary, I'll place 2 commas first
 in the array before declaring the variables, the 1st comma to skip english & the other to 
 skip french */
 let [, , maryNative, marySecondary] = languages;
 console.log(maryNative, marySecondary);

 /* Object Destructuring Example */
 /* Since values in an object are represented by their property names, they can be
  destructured just by using their property names */
 let languages2 = {
     firstLanguage: "english",
     secondLanguage: "french",
     thirdLanguage: "german",
     fourthLanguage: "japanese",
 };
let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using destructuring with the 'rest' parameter syntax.
/* A. Using the 'rest' parameter syntax to bundle up the remaining part of the array. */
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others); // Prints out an array of the remaining elements.

/* B. Using the 'rest' parameter syntax to bundle up the remaining part of the object. */
let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let {brian, anna, ...rest} = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest); // Prints out an object of the remaining elements.


