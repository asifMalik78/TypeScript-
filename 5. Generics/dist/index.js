"use strict";
//Generic Classes
class keyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const pair = new keyValuePair(2, "hash");
const pair1 = new keyValuePair("2", 100);
//Generic Functions
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
ArrayUtils.wrapInArray(1);
function fetchData(url) {
    return {
        data: null,
        error: null,
    };
}
fetchData("url");
fetchData("url");
//Generic Constraints
class Animal {
    constructor(name) {
        this.name = name;
    }
}
function echo(value) {
    return value;
}
let res = echo(new Animal("hellow"));
console.log(res);
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] == value);
    }
}
const store = new Store();
store.add({ name: "a", price: 10 });
store.find('name', 'a');
store.find('price', 1);
// store.find('nonexassdfasdf' , 100);
//Pass on the generic type parameter
class CompressibleSotre extends Store {
    compress() { }
}
//Restricting the Generic type Parameter
class SearchableStore extends Store {
    findS(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
//Fix the generic type parameter
class ProductStore extends Store {
    filterByCategory(category) {
        return [];
    }
}
