//clases
class Account {
  readonly id: number;
  owner: string;

  //access modifiers
  private _balance: number;

  //optional data members
  nickname?: string;
  constructor(id: number, owner: string, balance: number) {
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
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid Amount");
    }

    this._balance = amount;
  }

  set balance(value: number) {
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
  // A1 : string;
  // A2 : string;
  //index signature properties
  [seatNumber: string]: string;
}

let seats = new SetAssignment();
seats.A1 = "Lee";
seats["A"] = "Lee";
seats.A2 = "Paul";
console.log(seats);

//Static Members
class Ride {
  private static _activeRides: number = 0;

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

const ride1 = new Ride();
const ride2 = new Ride();
ride1.start();
ride2.start();

console.log(Ride.activeRides);
console.log(ride1, ride2);

//Inheritance
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get getFullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

const student = new Student(1, "John", "Walker");

//Method Overriding (changing the implementation of the inherited class)
class Teacher extends Person {
  override get getFullName() {
    return `Professor ${super.getFullName}`;
  }
}

const teacher = new Teacher("John", "Doe");
console.log(teacher.getFullName);

class Principal extends Person {
  override get getFullName() {
    return `Principal ${super.getFullName}`;
  }
}

//Polymorphism = Many Forms
printNames([
  new Student(1, "John", "Doe"),
  new Teacher("Jane", "Doe"),
  new Principal("Ben", "Stokes"),
]);

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.getFullName);
  }
}

//Abstract Class and Methods
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a Circle");
  }
}

class Rectangle extends Shape {
  constructor(public l: number, public b: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a Rectangle");
  }
}

const circle = new Circle(2, "Black");
const rectangle = new Rectangle(2, 4, "Blue");
circle.render();
rectangle.render();

//Interfaces

/*abstract class Calender {
  constructor(public name : string) {}

  abstract addEvent() : void
  abstract removeEvent() : void
}*/

interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalender extends Calender {
  sync: () => void;
}

//ctrl + .
class GoogleCalender implements Calender {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
