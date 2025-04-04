// spread and rest operator -> array destructuring, object destructuring

const arr = [10, 20, 30, 40, 50];

// const f = arr[0];
// const s = arr[1];
// const t = arr[2];
// const fo = arr[3];
// const fi = arr[4];

// array destructuring

const [f, s, t, fo, fi] = arr;

// console.log(f, s, t, fo, fi);

// object destructuring

const obj = {
    name: "Harsha",
    age: 23,
    state: "Kerala",
    city: "Kozhikode",
    country: "India",
    company: {
        name: "Google",
        ceo: "Sundar Pichai"
    }
}

// const name = obj.name;
// const age = obj.age;
// const state = obj.state;
// const city = obj.city;
// const country = obj.country;
// const ceo = obj.company.ceo;
// const companyName = obj.company.name;

// console.log(name, age, state, city, country, ceo, companyName);

const { name: username, age, state, city, country, company: { name, ceo } } = obj

// console.log(name, age, state, city, country, username, ceo);

// spread operator

const array = [10, 20, 30, 40, 50];

// const copyOfArray = array; // shallow copy -> pass by reference 
const copyOfArray = [...array]; // deep copy -> pass by value

copyOfArray.push(60);

console.log(copyOfArray, array);

const ob = {
    name: "Harsha",
    age: 23,
    state: "Kerala",
    city: "Kozhikode",
    country: "India",
    company: {
        name: "Google",
        ceo: "Sundar Pichai"
    }
}

const copyOb = { ...ob, company: {...obj.company} }

copyOb.state = "Elon Musk";

console.log(ob, copyOb);

// spread operator

const arr1 = [10, 20, 30, 40, 50];

const [first, second, ...remainingArray] = arr1

console.log(remainingArray);

const obj2 = {
    name: "Harsha",
    age: 23,
    state: "Kerala",
    city: "Kozhikode",
    country: "India",
    company: {
        name: "Google",
        ceo: "Sundar Pichai"
    }
}

const { state: state2, country: country2, ...remainingObj } = obj2

console.log(remainingObj);

// merge 2 array

const a1 = [10, 20, 30, 40, 50];
const a2 = [60, 70, 80, 90, 100];

const mergedArray = [...a1, ...a2]

console.log(mergedArray);