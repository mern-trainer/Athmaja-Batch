// core modules

// fs -> File System -> C R U D

// write File, read File, append File, unlink File

const fs = require("fs");

// fs.writeFile("sample.txt", "Hello World", (err) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     console.log("File Created");
// })

// fs.appendFile("sample.txt", "\nAppend File", (err) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     console.log("File updated");
// })

// fs.readFile("sample.txt", { encoding: "utf-8" }, (err, data) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     console.log(data);
// })

// fs.unlink("sample.txt", (err) => {
//     if(err){
//         return console.log(err.message);
//     }
//     console.log("File Deleted");
// })

// fs.writeFileSync("sample.txt", "Hello World");

// const res = fs.readFileSync("sample.txt", { encoding: "utf-8" });

// console.log(res);


//  STREAMS -> Read, write

// / 1GB, 10GB,

// movies -> 2MB -> 1GB -> 1024MB -> 512s -> 8 - 9min
// streams -> small files 16kb =>

const readStream = fs.createReadStream("streams.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("downloaded_stream.txt", { encoding: "utf-8" });

readStream.on("data", (chunk) => {
    writeStream.write(`CHUNK: ${chunk}`);
})

readStream.on("error", (err) => {
    console.log(err.message);
})

readStream.on("end", () => {
    console.log("Completed");
})