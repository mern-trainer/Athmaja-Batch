// promise, async await, memoization

// promise -> A way to handle asynchronous operations in JavaScript.
// 3 states -> fulfilled, rejected, pending, (settled)

// async await -> A way to handle asynchronous operations in JavaScript.

// memoization -> An optimization technique in JavaScript.

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Error happend");
    }, 3000);
})

console.log(p);

p.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("finally");
})

console.log("skjdhfkjshdkfhskdfkskd");