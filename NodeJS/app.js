// core modules

// fs -> File System -> C R U D

// write File, read File, append File, unlink File

const fs = require("fs");

fs.writeFile("sample.txt", "Hello World", (err) => {
    if (err) {
        return console.log(err.message);
    }
    console.log("File Created");
})

fs.appendFile("sample.txt", "\nAppend File", (err) => {
    if (err) {
        return console.log(err.message);
    }
    console.log("File updated");
})

fs.readFile("sample.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(data);
})

fs.unlink("sample.txt", (err) => {
    if(err){
        return console.log(err.message);
    }
    console.log("File Deleted");
})



