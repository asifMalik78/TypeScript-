"use strict";
//clases
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    //or
    //   constructor(
    //     private readonly id: number,
    //     public owner: string,
    //     private _balance: number
    //   ) {}
    //methods
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        this._balance = amount;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error("Invalid Value");
        }
        this._balance = value;
    }
    get balance() {
        return this._balance;
    }
}
const account = new Account(1, "Max", 0);
// console.log(account instanceof Account);
account.balance = 20;
console.log(account);
console.log(account.balance);
//Index Signatures (to add class proerties dynamically to an object)
class SetAssignment {
}
let seats = new SetAssignment();
seats.A1 = "Lee";
seats["A"] = "Lee";
seats.A2 = "Paul";
console.log(seats);
//Static Members
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
const ride1 = new Ride();
const ride2 = new Ride();
ride1.start();
ride2.start();
console.log(Ride.activeRides);
console.log(ride1, ride2);
//Inheritance
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get getFullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking a test");
    }
}
const student = new Student(1, "John", "Walker");
//Method Overriding (changing the implementation of the inherited class)
class Teacher extends Person {
    get getFullName() {
        return `Professor ${super.getFullName}`;
    }
}
const teacher = new Teacher("John", "Doe");
console.log(teacher.getFullName);
class Principal extends Person {
    get getFullName() {
        return `Principal ${super.getFullName}`;
    }
}
//Polymorphism = Many Forms
printNames([
    new Student(1, "John", "Doe"),
    new Teacher("Jane", "Doe"),
    new Principal("Ben", "Stokes"),
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.getFullName);
    }
}
//Abstract Class and Methods
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a Circle");
    }
}
class Rectangle extends Shape {
    constructor(l, b, color) {
        super(color);
        this.l = l;
        this.b = b;
    }
    render() {
        console.log("Rendering a Rectangle");
    }
}
const circle = new Circle(2, "Black");
const rectangle = new Rectangle(2, 4, "Blue");
circle.render();
rectangle.render();
