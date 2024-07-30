// Part 1: Data Types
let mystring = "I love web development";
let mynumber = 6;
let myboolean = true;
let nullVariable = null;
let undefinedVar;
let objectVar = {
    name: "Vincent Omari",
    idno: 37758550
};
let symbolVar = Symbol("uniqueIdentifier");

//Printing variables 
console.log("String :", myString);
console.log("Number :", mynumber);
console.log("Boolean:", myboolean);
console.log("Null   :", nullVariable);
console.log("Undefined :", undefinedVar);
console.log("Object :", objectVar);
console.log("Symbol :", symbolVar);

// Part 2: Arrays
let numbers = [6, 8, 11, 18, 21];

//  Using the map method
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

// Using the filter method 
let greaterThanTen = numbers.filter(num => num > 10);
console.log("Numbers Greater Than 10:", greaterThanTen);

//  Using the reduce method 
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Numbers:", sum);

// Using the forEach method 
numbers.forEach(num => console.log("Number:", num));

// function greet
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Vincent");

//function sumArray
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of Array:", sumArray([2, 4, 6, 8, 10]));

//function findMax 
function findMax(arr) {
    return Math.max(...arr);
}
console.log("Maximum Number:", findMax([10, 5, 3, 7, 2]));
