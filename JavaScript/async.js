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

// console.log(p);

// p.then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("finally");
// })


// async await

// const promiseFunc = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Error happend");
//         }, 3000);
//     })
// }

// async function sum(a, b) {
//     try {
//         const res = await promiseFunc()
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }

// sum()

// fetch -> A way to make HTTP requests in JavaScript.
// api -> application programming interface

fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
    return res.json()
}).then((result) => {
    // console.log(result);
}).catch((error) => {
    // console.log(error);
})

const getTodos = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const result = await response.json()
        // console.log(result);
    } catch (err) {
        // console.log(err);
    }
}

// getTodos()

// Memoization

const obj = {}

// const sample = "name"

// obj[sample] = "Harsha"

// console.log(obj);

const sum = (a, b) => {
    const key = a + "," + b
    if (obj[key]) {
        return obj[key]
    }
    console.log("Calculating...");
    const s = a + b
    obj[key] = s
    return s
}

console.log(sum(102, 0));
console.log(sum(10,20));
console.log(sum(10,30));
console.log(sum(10, 20));

// application

const cache = {}
const getProducts = async (id) => {
    try {
        const key = id
        if (cache[key]) {
            console.log("Fetching from cache...");
            return cache[key]
        }
        console.log("Fetching...");
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const result = await res.json()
        cache[key] = result
        return result
    } catch (error) {
        return null   
    }
}

const handleProductCall = async () => {
    let res = await getProducts(1)
    console.log(res);
    res = await getProducts(1)
    console.log(res);
    res = await getProducts(1)
    console.log(res);
    res = await getProducts(1)
    console.log(res);
    console.log("Completed");
}

handleProductCall()