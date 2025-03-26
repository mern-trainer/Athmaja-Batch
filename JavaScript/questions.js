// prime number -> 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

const num = 13

// default parameter -> parameter with default value

function is_prime(number = 2) { 
    if(number == 0 || number == 1) {
        return false
    }
    for (let i = 2; i <= number / 2; i++){
        if (number % i == 0) {
            return false
        }
    }
    return true 
}

const res = is_prime(2)

if (res) {
    console.log(num + " is a prime number");
} else {
    console.log(num + " is not a prime number");
}

// palindrome -> 123 <-> 321, 121 <-> 121 -> +ve

function is_palindrome(number = 121){
    let temp = number
    let reverse = 0
    while (temp > 0) {
        const rem = temp % 10
        reverse = reverse * 10 + rem
        temp = parseInt(temp / 10)
    }
    if (reverse == number) {
        console.log(number + " is a palindrome number");
    } else {
        console.log(number + " is not a palindrome number");
    }
}

is_palindrome(1234321)

// reverse = 0
// 123 -> -> 3 , reverse * 10 = 0 + 3 = 3 -> 123 / 10 = 12.3 = parseInt(12.4) = 12
// 12 -> 2 ->, reverse * 10 = 3 * 10 -> 30 + 2 = 32 -> 12/10 -> 1.2 => parseInt(1.2) = 1
// 1 -> 1 -> reverse * 10 = 32 * 10 = 320 + 1 = 321 -> 1/10 -> 0.1 => parseInt(0.1) = 0
// 0

// string, array

// string -> Collection of characters
// index = 0 - (length - 1)
const text = "Hello World"

console.log(text[6]);
console.log(text.charAt(6));
console.log(text.indexOf("World"));

console.log(text.length);

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.slice(3));

console.log(text.includes("Worled"));

console.log(text.replace("Hello", "Hey"));

console.log(text.trimEnd());

console.log(text.split(" "));

// 89xxxxxx27
// vis****@gmail.com

function hideNumber(number = 0){
    const strNumber = number.toString()
    const initialNumbers = strNumber.slice(0, 2)
    const lastNumbers = strNumber.slice(-2)
    return initialNumbers + "******" + lastNumbers
}

console.log(hideNumber(1234567890));

// Array -> Collection of elements

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numbers[9]);
console.log(numbers.length);
console.log(numbers.indexOf(7));
console.log(numbers.includes(10));
console.log(numbers.at(2));

// numbers.push(12, 13, 14, 15, 16, 17, 18, 19, 20)
// console.log(numbers.pop());
// numbers.unshift(0,10,20,304,90)
// numbers.shift()

console.log(numbers.toReversed());

console.log(numbers.join(""));

console.log(numbers);

const email = "alexander@gmail.com"

const emailArray = email.split("@")

const username = emailArray[0].slice(0, 4) + "****"

const hideMail = username + "@" + emailArray[1]

console.log(hideMail);

// Object -> Collection of key value pairs

// const a = {
//     name: "John",
//     age: 20,
//     address: {
//         city: "New York",
//         state: "NY",
//         pin_code: 10001
//     }
// }

// a.address.city = "Mumbai"
// a.address.pin_code = 400001
// a.age = 100

// console.log(a);







