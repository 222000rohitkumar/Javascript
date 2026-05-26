// Data Types and Variables
"use strict"; // treat all JS code as newer version

//alert(3+3)

console.log(3+
    3);
// Readibility issue should be high

let name = "Wolverine";
let age = 100;
let isHero = true;

// number => 2 to power 53
//bigint => larger than 2 to power 53
//let bigInt = 1234567890123456789012345678901234567890n;

//null => empty value
//undefined => value is not assigned

// Symbol => unique identifier

// Object => collection of key-value pairs
let person = {
    name: "Wolverine",
    age: 100,
    isHero: true
};

// Dynamic Typing
let dynamicVar = "I am a string";
dynamicVar = 42; // Now it's a number
dynamicVar = true; // Now it's a boolean

// Type Coercion
console.log("5" + 3); // "53" (string concatenation)
console.log("5" - 3); // 2 (number subtraction)
console.log("5" * 3); // 15 (number multiplication)
console.log("5" / 3); // 1.666... (number division)

// Variable Scope
function testScope() {
    let localVar = "I am local";
    console.log(localVar); // Accessible here
}
