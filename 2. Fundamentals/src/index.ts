// Builtin Types
let sale = 123_456_789;
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
let numbers: (number | string)[] = [1, 2, 3, 4, "ais"];

//Tuples in Typescript
//It works according to the order we annotate
let user: [number, string] = [1, "Asif"];

//Enums in Typescript
const small = 1;
const medium = 2;
const large = 3;

//pascal case convention
//adding const before enum compiler will generate more optimized code
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Large;
console.log(mySize);

//Functions in Typescript
//always properly annotate functions
function calculateTax(income: number, year: number = 2022): number {
  if (year < 2022) {
    return income * 1.2;
  }

  return income * 1.3;
}

calculateTax(1000, 2019);

//Objects in Typescript
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Asif Malik",
  retire: (date: Date) => {
    console.log(date);
  },
};
