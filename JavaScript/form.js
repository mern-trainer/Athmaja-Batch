// const home = document.getElementById("home")
// console.log(home);
// const about = document.getElementById("about")
// console.log(about);
// const contact = document.getElementById("contact")
// console.log(contact);

// function handleMenu(page) {
//     console.log(page);
//     if (page == "h") {
//         home.style.display = "block"
//         about.style.display = "none"
//         contact.style.display = "none"
//     } else if (page == "a") {
//         home.style.display = "none"
//         about.style.display = "block"
//         contact.style.display = "none"
//     } else if (page == "c") {
//         home.style.display = "none"
//         about.style.display = "none"
//         contact.style.display = "block"
//     }
// }

function handleForm() {
    // const name = document.getElementById("name").value
    // const email = document.getElementById("email").value
    // const password = document.getElementById("password").value
    // const confirmPassword = document.getElementById("confirmPassword").value
    // console.log(name, email, password, confirmPassword);
    const name = document.signup.name.value
    const email = document.signup.email.value
    const password = document.signup.password.value
    const confirmPassword = document.signup.confirmPassword.value
    
    if (name == "" || email == "" || password == "" || confirmPassword == "") {
        alert("All fields are required")
        return false
    }

    if (name.length < 4 || name.length > 12) {
        alert("Name must be between 4 and 12 characters")
        return false
    }

    if (!email.includes("@gmail.com")) {
        alert("Email must be gmail.com")
        return false
    }

    if (password != confirmPassword) {
        alert("Passwords do not match")
        return false
    }

    alert("Form submitted successfully")
    return false
}

// regex -> pattern ->

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/