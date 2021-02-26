// Decision Making Exercise

// 1a
let randomNum = Math.random();
randomNum *= 6;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);

// 1b
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum == 2 || randomNum == 3) {
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

// 1c
if (randomNum != 3) {
    console.log("Not equal to 3");
} 

// 1d
if (randomNum !== 3 && randomNum !== 5) {
    console.log("NOT equal to 3 AND not equal to 5");
}

// 1e
if (randomNum == 2 || randomNum == 4) {
    console.log("Equal to 2 OR equal to 4");
}

// BONUS
// 2
randomNum >= 4 ? ""