// arrow functions -> short syntax for writing functions

// function sum1(a) {
//     return a
// }

// console.log(sum1(10));

// const sum2 = a => a

// console.log(sum2(10));

// callback functions -> function passed as an argument to another function

// synchronous -> line by line execution of code.
// asynchronous -> multiple lines of code can be executed at the same time

// event loop, callback queue, microtask queue, macrotask queue, call stack

// callback function -> function passed as an argument to another function

const handleCall = (callbackFunc) => {
    callbackFunc();
}

handleCall(function () { // anonymous function
    // console.log("Hello World");
})


const sum = (a, b, callback) => {
    const s = a + b
    callback(s);
}

sum(10, 20, (value) => {
    // console.log(value);
})

const sumOfNNumbers = (n, callback) => {
    let sum = 0
    for (let i = 1; i <= n; i++){
        sum = sum + i
        callback(sum, 10, 30)
    }
}

const arr = []

sumOfNNumbers(10, (sum, a ,b) => {
    arr.push(sum)
})

// console.log(arr);

// application of callback functions

// array mathod -> map

// map -> array manipulation

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const res = array.map((element) => {
    if (element % 2 == 0) {
        return element * 100
    }
    return element
})

// console.log(res);

// class and objects -> oops.

// class -> blueprint
// object -> instance of a class

// constructor -> special function called automatically when an object is created.
// attributes -> properties of an object
// methods -> functions of an object
// this -> reference to the current object, global object


class Person{
    #name;
    #age;
    constructor(name, age) {
        this.#name = name
        this.#age = age
    }

    displayPersonData() {
        console.log(this.#name, this.#age);
    }

    sum(a, b) {
        return a + b
    }
}

const p1 = new Person("Harsha", 22) // memory allocate for p1 object

p1.name = "Changed"

p1.displayPersonData()

console.log(p1.sum(10, 30));

// 4 pillers of OOPs

// Encapsulation -> data hiding, data bundling -> private, public, protected, default
// Abstraction -> Hide the implementation details from the user
// Inheritance -> re-usability, extend the functionality of a class -> extend
// Polymorphism -> multiple forms
// -> method overloading, method overriding

// method overloading -> same method name with different parameters
// method overriding -> same method name with same parameters

class User{
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    display() {
        console.log(this.name, this.age);
    }

    sum(fNum, sNum) {
        return fNum + sNum
    }

    displaySomething() {
        console.log("Hi");
    }
}

class Harsha extends User{
    sum(fNum, sNum, tNum) { // overloading
        return fNum + sNum + tNum
    }

    parentMethod() {
        super.display()
    }

    displaySomething() {
        console.log("Hello");
    }
}

const user = new Harsha("Harsha", 23)

const res1 = user.sum(10, 20, 30)

console.log(res1);

user.displaySomething()

user.parentMethod()

// -------------------------------------------------------------------------------------------------

