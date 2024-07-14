// Activity 1: Arithmetic Operations
let a = 2
let b = 4

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)

// Activity 2: Assignment Operators
// a += 3
// b -= 3

// console.log(a)
// console.log(b)

// Activity 3: Comparison Operators
// console.log(a > b)
// console.log(a < b)
// console.log(a >= b)
// console.log(a <= b)
// console.log(a == b)
// console.log(a === b)

// Activity 4: Logical Operators
// console.log(a > b && a < b)
// console.log(a > b || a < b)
// console.log(!(a > b))

// Activity 5: Ternary Operator
// console.log(a >= 0 ? "Positive" : "Negative")

// Feature Request:

// 1: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
function arithmetic(num1, num2) {
    console.log("Addition:" + (num1 + num2))
    console.log("Subtraction:" + (num1 - num2))
    console.log("Multiplication:" + (num1 * num2))
    console.log("Division:" + (num1 / num2))
    console.log("Remainder:" + (num1 % num2))
}
// arithmetic(a , b)

// 2: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
function compareNumbers(num1, num2) {
    console.log(num1 > num2)
    console.log(num1 < num2)
    console.log(num1 >= num2)
    console.log(num1 <= num2)
    console.log(num1 == num2)
    console.log(num1 === num2)

    // Logical operators
    console.log(num1 > num2 && num1 < num2)
    console.log(num1 > num2 || num1 < num2)
    console.log(!(num1 > num2))
}
// compareNumbers(a, b)

// 3: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
function numStatus(num) {
    console.log(num >= 0 ? "Positive" : "Negative")
}
numStatus(-a)