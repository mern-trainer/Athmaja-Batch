// callback -> function passed as an argument to another function
// -> asynchronous -> multiple lines of code can be executed at the same time

// Set, Map, Closure, Recursion, Hoisting

// Set -> collection of unique elements

const arr = [10]

arr.push(10)

console.log(arr);

// class and objects

const s = new Set()

s.add(10)
s.add(20)
s.add(30)
s.add(40)

// s.delete(20)

const res = s.has(10)

console.log(res);

console.log(s.size);

s.clear()

console.log(s);

const array = [1, 2, 3, 2, 1, 2, 387, 345, 345, 2, 5, 7, 8, 13, 6, 4, 3, 32, 2, 2, 2, 2, 2,];

const set = new Set(array)

const ar = Array.from(set)

console.log(ar);

// Map -> collection of key value pairs

const map = new Map()

map.set("name", "harsha")
map.set("age", 23)
map.set("place", "Kozhikode")

const is_exist = map.has("name");

map.delete("name")

console.log(map.size);

console.log(map.get("age"));

console.log(map);

// recursion -> function calling itself with in the body of the function.
// let i = 0
// const counter = () => {
//     if (i == 5) {
//         return;
//     }
//     console.log(i);
//     i++
//     counter()
// }

// counter()

const sum = (n) => {
    if (n == 0) {
        return 0;
    }
    return n + sum(n - 1)
}

const result = sum(4)

console.log(result);

// 1,2,3,4
// sum(4) -> sum(3) + 4
// sum(3) -> sum(2) + 3
// sum(2) -> sum(1) + 2
// sum(1) -> sum(0) + 1
// sum(0) -> 0

const fact = (n) => {
    if (n == 1) {
        return 1;
    }
    return n * fact(n - 1);
}

console.log(fact(5));

// palindrome

// 134

const is_palindrome = (number, temp=number, reverse=0) => {
    if (temp <= 0) {
        return number == reverse;
    }
    return is_palindrome(number, parseInt(temp / 10), reverse * 10 + (temp % 10));
}

console.log(is_palindrome(123));

// closure -> A function that has access to the parent scope,
// even after the parent function has closed.

// const outerFunction = () => {
//     let value = 0
//     const innerFunction = () => {
//         return ++value
//     }
//     return innerFunction
// }

// const response = outerFunction()

// let res1 = response()
// console.log(res1);
// res1 = response()
// console.log(res1);
// res1 = response()
// console.log(res1);



const counter = () => {
    let count = 0
    const increment = () => {
        return ++count
    }
    const reset = () => {
        count = 0
        return count
    }
    const decrement = () => {
        return --count
    }
    return {
        increment,
        reset,
        decrement
    }
}

const response = counter()

console.log(response.increment());
console.log(response.increment());
console.log(response.increment());
console.log(response.increment());
console.log(response.increment());
console.log(response.increment());
console.log(response.increment());
console.log(response.increment());
console.log(response.increment());
console.log(response.increment());
console.log(response.decrement());
console.log(response.decrement());
console.log(response.decrement());
console.log(response.decrement());
console.log(response.decrement());
console.log(response.reset());
console.log(response.increment());

// Hoisting
b = "Hi"

console.log(b);

// var a;

// js -> working => 2 phase -> memory phase, execution phase

// curring

// const volume = (l, b, h) => {
//     return l * b * h
// }

const volume = (l) => {
    return (b) => {
        return (h) => {
            return l * b * h
        }
    }
}

// const res = volume(10)(20)(30)

// or

const func1 = volume(10)

const func2 = func1(20)

const result1 = func2(30)

console.log(result1);
// console.log(re);