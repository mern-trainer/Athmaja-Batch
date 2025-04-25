// E5, ES6 -> ES5 -> 2009 -> require, module.exports
        //      ES6 -> 2015 -> import, export

// console.log("Hello, World!");

//NodeJS -> Nodejs is a runtime environment of javascript.

// features

// 1. Single Threaded
// 2. Non-blocking I/O
// 3. Asynchronous
// 4. event driven

// es5

// import methodName from "<package>"
// export default methodName

// const methodName = require("<package>")
// module.exports = methodName

// core modules / build in modules

// 1. build in modules -> modules that are already present in nodejs. Installation is not required.
// 2. Third party modules -> modules that are not present in nodejs. Installation is required.
// 3. Local modules -> modules that are created by us.

// core modules -> http, fs, path, url, os, dns
// third party modules -> Installation using npm, yarn, pnpm -> npm install <packageName>

const readlineSync = require("readline-sync")

const response = readlineSync.question("What is your name: ")

console.log(response);

// create an atm machine

// core modules -> http, fs, path, url, os, dns


