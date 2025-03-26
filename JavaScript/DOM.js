// DOM ( Document Object Model ) -> Programming interface for web documents to access and modify contents, structure and style.

// document -> HTML document

// Create Elements,  Get elements, Update elements, Change styles

// --------------------------------------------------------------------------------

const a = document.createElement("a")
a.href = "https://www.google.com"
a.textContent = "Google"
document.body.appendChild(a)

const selectElement = document.getElementById("sel")
const option = document.createElement("option")
option.value = "1"
option.text = "First Option"
selectElement.appendChild(option)

// -------------------------------------------------------------------------------

// const element = document.getElementById("demo2")

// element.innerHTML = "<b>Hello World</b>"

// console.log(element.innerText);
// console.log(element.innerHTML);

// const style = element.style
// style.color = "gray"
// style.backgroundColor = "yellow"
// style.padding = "20px"
// style.fontSize = "20px"

// ----------------------------------------------------------------------------------------

// const elements = document.getElementsByClassName("demo1")

// for (let i = 0; i < elements.length; i++){
//     elements[i].innerHTML = "<b>Hello World</b>"
// }

// console.log(elements);

// elements[1].innerText = "hey"

// console.log(elements[1]);

// --------------------------------------------------------------------------------------

// const elements = document.getElementsByTagName("h2")

// console.log(elements);

// same as getElementsByClassName

// ---------------------------------------------------------------------------------------

const element = document.querySelector("h2") // .className / #idName / tagName

// console.log(element);

// same as getElementById

// ------------------------------------------------------------------------------------------

const elements = document.querySelectorAll("h2") // .className / #idName / tagName

// console.log(elements);

// same as getElementsByClassName or getElementByTagName

// ---------------------------------------------------------------------------------------------

function handleClick() {
    const color = document.body.style.backgroundColor
    document.body.style.color = "black"
    if (color == "") {
        document.body.style.color = "white"
        document.body.style.backgroundColor = "red"
    } else if (color == "red") {
        document.body.style.color = "white"
        document.body.style.backgroundColor = "green"
    } else if (color == "green") {
        document.body.style.color = "white"
        document.body.style.backgroundColor = "blue"
    } else {
        document.body.style.color = "black"
        document.body.style.backgroundColor = ""
    }
}

