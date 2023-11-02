"use strict";
//Decorators are attributes that we apply to our classes and members
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Component(constructor) {
    console.log("Component Decorator Called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.inserInDOM = () => {
        console.log("Inserting the Component in the DOM");
    };
}
function Component1(options) {
    return (constructor) => {
        console.log("Component Decorator Called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.inserInDOM = () => {
            console.log("Inserting the Component in the DOM");
        };
    };
}
//Decorator composition (we can have more thatn one decorators)
function Pipe(constructor) {
    console.log("Pipe decorator called");
    constructor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component,
    Pipe
], ProfileComponent);
const h1 = new ProfileComponent();
console.log(h1 === null || h1 === void 0 ? void 0 : h1.inserInDOM());
//Method Decorators
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
        original.call(this, "hellow!!");
    };
}
class Person {
    say(message) {
        console.log(`Person says -> ${message}`);
    }
}
__decorate([
    Log
], Person.prototype, "say", null);
const person = new Person();
person.say("apple");
//Ancestor Decorators
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const res = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof res === "string" ? res.toUpperCase() : res;
    };
}
class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullNmae() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Person1.prototype, "fullNmae", null);
const person1 = new Person1("Ben", "Ten");
console.log(person1.fullNmae);
//Property Decorators
function MinLength(length) {
    return function (target, propertyName) {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length) {
                    throw new Error(`${propertyName} should be at least ${length} characters long`);
                }
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], User.prototype, "password", void 0);
const user = new User("1234");
console.log(user.password);
const watchedParameters = [];
function Watch(target, methodName, parameterIndex) {
    watchedParameters.push({
        methodName,
        parameterIndex,
    });
}
class Vehicle {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
console.log(watchedParameters);
