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