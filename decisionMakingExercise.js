// Decision Making Exercise

// 1a
let randomNum = Math.floor(Math.random() * 5) +1;
// let randomNum = Math.random();
// randomNum *= 6;
// randomNum = Math.floor(randomNum);
// randomNum++;
console.log(randomNum);


// 1b
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum == 2 || randomNum == 3) { //else if (randomNum >= 2) or else if (randomNum >1)
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

// 1c
if (randomNum != 3) {
    console.log("Not equal to 3");
} 

// 1d
// if (randomNum !== 3 && randomNum !== 5) {
if (randomNum !== (3 && 5)) {
    console.log("NOT equal to 3 AND not equal to 5");
}

// 1e
// if (randomNum == 2 || randomNum == 4) {
if (randomNum === (2 || 4)) {
    console.log("Equal to 2 OR equal to 4");
}

// BONUS
// 2
// Ternaries are good to use in place of a simple IF ELSE statment
// Syntax Example (Condition ? Code : Code;)
randomNum >= 4 ? console.log("Greater than or equal to 4") : console.log("Less than 4");
console.log(randomNum);
// A ternary returns a value. Also, the value can be set to a variable
// let result = randomNum >= 4 ? "Greater than or equal to 4" : "Less than 4";
// console.log(result);

// Switch statment takes in a parameter and returns something based on the case (Or the match) that the parameter goes with
// 3
switch (randomNum) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;

    default:
        console.log("Five");
        break;
}