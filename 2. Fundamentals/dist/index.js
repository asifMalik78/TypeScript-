"use strict";
// Builtin Types
let sale = 123456789;
let course = "Typescript";
let isCompleted = true;
//infers any type
let level;
level = 1;
level = "b";
//Arrays in Typescript
//array data is automatically infers by the typescript
let num = [1, 2, 3, 4, 5];
//when have more than one type
let numbers = [1, 2, 3, 4, "ais"];
//Tuples in Typescript
//It works according to the order we annotate
let user = [1, "Asif"];
//Enums in Typescript
const small = 1;
const medium = 2;
const large = 3;
let mySize = 3 /* Size.Large */;
console.log(mySize);
//Functions in Typescript
//always properly annotate functions
function calculateTax(income, year = 2022) {
    if (year < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(1000, 2019);
//Objects in Typescript
let employee = { id: 1, name: "Asif Malik" };
