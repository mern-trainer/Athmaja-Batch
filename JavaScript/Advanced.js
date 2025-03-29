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
    console.log("Hello World");
})


const sum = (a, b, callback) => {
    const s = a + b
    callback(s);
}

sum(10, 20, (value) => {
    console.log(value);
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

console.log(arr);

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

console.log(res);