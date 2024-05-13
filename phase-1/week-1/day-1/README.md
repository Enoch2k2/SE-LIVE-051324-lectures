# Phase 1 Week 1

### Basic Git & Lecture Prep ###

GIT - a tool we use to manage a project on your computer

Github - a website that stores git repositories and can be managed online

#### Git Basics Cheatsheet ####

```
git init - creates a new repository
git add /path - stages files / folders to be commited
git commit -m 'message' - stores all the files and folders and what was done at that point of time
git push - pushes all of our unpushed commits to github
git log - lists all of our commits
git status - displays all of the stages files / folders that are ready for commit
git diff - compares the detailed changes between the current changes and the changes made in the last commit
```

### Lecture: Functions & Scope

```
/*
Agenda

Datatypes
- String
- Boolean
- Integer
- Floats
- Undefined
- Null
- NaN
- Arrays
- Objects
Variables
operators
- == as well as ===
- > as well as >=
- < as well as <=
- + - / *
- && and as well || or
interpolation and concatonation
conditionals
functions
scope

*/

const { log } = require("console")

// this is a one line comment which will be ignored by the computer

//strings

// console.log("Hello World")

// console.log('Hello World Again!')
  
// console.log(`Hello world one more time!`)

// booleans
true // on, is, exist, yes, truthy
false // off, isn't, doesn't exist, no, falsy

// integers (whole numbers), also can be negative

10 // integer
-10 // integer
0 // integer

// floats (decimals)

10.5
-10.5
0.5

// null - no value
null

// undefined - returned automatically by functions
undefined

// Not A Number - used when parsing or interacting in a way that it's supposed to be a number
NaN

// arrays - bracket, container
[100, "Hello World", false, null]

// objects - curly brackets, container, consists of key / value pairs

 // { name: "Bob", age: 32 }

// variables - declarator name = value
// var name = "Bob"
// let age = 32
// const hobby = "Gaming"

// age = 33

// console.log(name)
// console.log(age)
// console.log(hobby)

// operators
// - == as well as ===
// - > as well as >=
// - < as well as <=
// - && and as well || or
// - + - / *

// console.log("1" == 1) // true
// console.log("1" === 1) // false

// console.log("albert" < "brittany")
// console.log(5 <= 5)
// console.log(5 >= 5)

// console.log("hello" == "Bob" && "hello" == "hello") // false, both sides need to be true
// console.log("hello" == "Bob" || "hello" == "hello") // true, only one side has to be true

// console.log(1 + 1)
// console.log(1 - 1)
// console.log(4/2)
// console.log(4*4)

// let num1 = 1
// let num2 = 3

// let result = 5

// console.log(num1 + num2 == result)



// if / else if / else

// let name = "Sam"
// let age = 31

// if(age < 32) {
//   console.log(`${name}'s age is less than 32`)
//   if(name == "Bob") {
//     console.log(`Name is also ${name}`)
//   }
// } else if (age == 32) {
//   console.log(`${name}'s age is equal to 32`)
// } else {
//   console.log(`${name} is greater than 32`)
// }

// functions

// DRY - Don't Repeat Yourself


// function add(num1, num2) {
//     return num1 + num2
// }

// console.log('outside add', add(1, 3) + add(2, 2))




// let name = "Bob"
// function greeting() {
//   let name = "Sam"
//   if(true) {
//     let name = "Sarah"
//     console.log('inside of if statement', name)
//   }
//   console.log('inside of greeting', name)
// }


// greeting()

// console.log('outside of greeting', name)
```