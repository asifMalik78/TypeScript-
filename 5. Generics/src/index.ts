//Generic Classes
class keyValuePair<T, U> {
  constructor(public key: T, public value: U) {}
}

const pair = new keyValuePair(2, "hash");
const pair1 = new keyValuePair<string, number>("2", 100);

//Generic Functions
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

ArrayUtils.wrapInArray(1);

//Generic Interfaces
interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetchData<T>(url: string): Result<T> {
  return {
    data: null,
    error: null,
  };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

fetchData<User>("url");
fetchData<Product>("url");

//Generic Constraints
class Animal {
  constructor(public name: string) {}
}
interface Person {
  name: string;
}

function echo<T extends number | string | Person | Animal>(value: T): T {
  return value;
}

let res = echo(new Animal("hellow"));
console.log(res);

//Extending Generic Classes
interface Product2 {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] == value);
  }
}

const store = new Store<Product2>();
store.add({ name: "a", price: 10 });
store.find("name", "a");
store.find("price", 1);
// store.find('nonexassdfasdf' , 100);

//Pass on the generic type parameter
class CompressibleSotre<T> extends Store<T> {
  compress() {}
}

//Restricting the Generic type Parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  findS(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

//Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}

//Type Mapping
interface Product3 {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  //index signature
  //key of
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

let product: Readonly<Product3> = {
  name: "Toy",
  price: 10,
};
