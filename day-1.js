// Activity 1
var a = 1
let b = "Anabia"

// console.log(a)
// console.log(b)

// Activity 2
const c = true

// console.log(c)

// Activity 3
let d = 12
let e = "Anabia"
let f = false
let g = {
    name: "Rizwan"
}
let h = ["Apple", "Mango"]

// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof f)
// console.log(typeof g)
// console.log(typeof h)

// Activity 4
let i = "Anas"
// console.log(i)
i = "Hafsa"
// console.log(i)

// Activity 5
const j = "Hoorain"
// console.log(j)
// j = "Hoorain Rizwan" // TypeError: Assignment to constant variable.
// console.log(j)

// Feature Request:
// 1: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

function one(val) {
    let a = val
    console.log(a, typeof a)
}
// one(12)
// one("Anabia")
// one(false)
// one({ name: "Rizwan" })
// one(["Apple", "Mango"])

function logValueAndType(variable) {
    console.log(variable, typeof variable);
}

// logValueAndType(d)
// logValueAndType(e)
// logValueAndType(f)
// logValueAndType(g)
// logValueAndType(h)

// 2: Create a script that demonstrates the difference in behavior between let and const  when it comes to reassignment.
function two(val) {
    return val
}
// Wrong

// let result = two(d = "Asim")
// result = two(j = "Asim")
// console.log(result)

// Again
let result = two("Asim")
result = two("Anas")
console.log(result)

const resultWithConst = two("Bilal")
resultWithConst = two("Anas")
console.log(resultWithConst)