//Decorators are attributes that we apply to our classes and members

function Component(constructor: Function) {
  console.log("Component Decorator Called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.inserInDOM = () => {
    console.log("Inserting the Component in the DOM");
  };
}

//Parameterized Decorators

type ComponentOptions = {
  selector: string;
};

function Component1(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component Decorator Called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.inserInDOM = () => {
      console.log("Inserting the Component in the DOM");
    };
  };
}

//Decorator composition (we can have more thatn one decorators)
function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}

@Component1({ selector: "#my-profile" })
@Pipe
class ProfileComponent {}

//Method Decorators
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
    original.call(this, "hellow!!");
  };
}

class Person {
  @Log
  say(message: string) {
    console.log(`Person says -> ${message}`);
  }
}

const person = new Person();
person.say("apple");

//Ancestor Decorators
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const res = original?.call(this);
    return typeof res === "string" ? res.toUpperCase() : res;
  };
}

class Person1 {
  constructor(public firstName: string, public lastName: string) {}
  @Capitalize
  get fullNmae() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person1("Ben", "Ten");
console.log(person1.fullNmae);

//Property Decorators
function MinLength(length: number) {
  return function (target: any, propertyName: string) {
    let value: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(
            `${propertyName} should be at least ${length} characters long`
          );
        }
        value = newValue;
      },
    };
    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  @MinLength(4)
  password: string;
  constructor(password: string) {
    this.password = password;
  }
}

const user = new User("1234");
console.log(user.password);

//Parameter Decorators
type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];
function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(watchedParameters);
