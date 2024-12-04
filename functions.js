/**
 * FUNCTIONS
 * Funktsioone kasutame korduvate tegevuste automatiseerimiseks.
 * Funktsioon võtab sulgude vahele parameetrid. (placeholders)
 */

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(4, 6))
const sumOfTwoNumbers = sum(4, 6)

/**
 * Arrow function 
 */

function fullName(firstName, lastName) {
    //return firstName + " " + lastName;
    return `${firstName} ${lastName}`;
}