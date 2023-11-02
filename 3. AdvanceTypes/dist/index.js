"use strict";
let employee = {
    id: 1,
    name: "david",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    //narrowing
    if (typeof weight == "number") {
        return weight * 2;
    }
    else {
        return parseInt(weight) * 2;
    }
}
kgToLbs(1);
kgToLbs("23");
let textBox = {
    add: () => { },
    multiply: () => { },
};
let quantity = 100;
let size = "cm";
//nullable types (strict : true , strictNullChecks : true)
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("hellow");
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//Nullish Coalsing operator
let speed = null;
// let ride = {
//   speed: speed !== null ? speed : 30,
// };
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
//Type Assertions
let mobile1 = document.getElementById("phone");
let mobile2 = document.getElementById("phone");
//unknown type
function render(document) {
    //we can use narrowing to be more specific
    if (typeof document === "string") {
        //it workd on primitive types to use it for classes and objects we use instanceOf to be more specific
        document.toUpperCase();
    }
}
