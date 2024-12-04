/**
 * FUNCTIONS
 * Funktsioone kasutame korduvate tegevuste automatiseerimiseks.
 * Funktsioon võtab sulgude vahele parameetrid. (placeholders)
 * keyword return tagastab misiganes peale teda tuleb
 */

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(4, 6))
const sumOfTwoNumbers = sum(4, 6)

/**
 * IIFE - funktsioon, mis kutsutakse automaatselt välja.
 */

(() => {
    console.log(2 - 3);
})();

/**
 * Arrow function 
 */

const fullName = (firstName, lastName) => {
    //return firstName + " " + lastName;
    return `${firstName} ${lastName}`;
}

console.log(fullName("Kadi", "Antonov"));