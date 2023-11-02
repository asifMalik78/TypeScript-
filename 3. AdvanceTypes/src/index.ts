// type alias
type Employee = {
  readonly id: number;
  name: string;
  retire: (data: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "david",
  retire: (date: Date) => {
    console.log(date);
  },
};

//union types
type WeightType = number | string;
function kgToLbs(weight: WeightType): number {
  //narrowing
  if (typeof weight == "number") {
    return weight * 2;
  } else {
    return parseInt(weight) * 2;
  }
}

kgToLbs(1);
kgToLbs("23");

//intersection types
type Add = {
  add: () => void;
};

type Multiply = {
  multiply: () => void;
};

type Calculation = Add & Multiply;

let textBox: Calculation = {
  add: () => {},
  multiply: () => {},
};

//literal types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";
let size: Metric = "cm";

//nullable types (strict : true , strictNullChecks : true)
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("hellow");
  }
}

greet(null);

//optional chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday);

//Nullish Coalsing operator
let speed: number | null = null;
// let ride = {
//   speed: speed !== null ? speed : 30,
// };

let ride = {
  speed: speed ?? 30,
};

//Type Assertions
let mobile1 = document.getElementById("phone") as HTMLElement;
let mobile2 = <HTMLElement>document.getElementById("phone");

//unknown type
function render(document: unknown) {
  //we can use narrowing to be more specific
  if (typeof document === "string") {
    //it workd on primitive types to use it for classes and objects we use instanceOf to be more specific
    document.toUpperCase();
  }
}
