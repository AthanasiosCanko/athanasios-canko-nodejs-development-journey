// const fs = require("fs")

// fs.appendFileSync('notes.txt', 'My name is Andrew.\n')

// //
// // Challenge: Append a file to notes.txt
// // 
// // 1. Use appendFileSync to append to the file
// // 2. Run the script
// // 3. Check your work by opening the file and viewing the appended text

var add = require('./utils.js')

// const name = "Andrew"
const sum = add(4, -2)
console.log(sum)

var getNotes = require('./notes.js')

console.log(getNotes())

// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console

const validator = require('validator')
console.log(validator.isEmail("cankoathanasios@gmail.com"))
console.log(validator.isURL('https://mead.io'))