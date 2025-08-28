"use strict";
// DOM Selectors
const myGuess = document.getElementById("myGuess");
const lower = document.getElementById("lower");
const higher = document.getElementById("higher");
const correct = document.getElementById("correct");

// Set score
let myScore = 1;

// Generate guess
function generateGuess(min = 1, max = 100) {
  let computerGuess = Math.floor(Math.random() * (max - min + 1)) + min;
  return computerGuess;
}

let minimum = 1;
let maximum = 100;

let currentGuess = generateGuess();
myGuess.innerText = `Jeg gætter på ${currentGuess}`;

// Event Listeners
lower.addEventListener("click", () => {
  myScore++;
  maximum = currentGuess - 1;
  console.log(`Nyt interval er ${minimum} til ${maximum}`);
  currentGuess = generateGuess(minimum, maximum);
  myGuess.innerText = `Jeg gætter på ${currentGuess}`;
});

higher.addEventListener("click", () => {
  myScore++;
  minimum = currentGuess + 1;
  console.log(`Nyt interval er ${minimum} til ${maximum}`);
  currentGuess = generateGuess(minimum, maximum);
  myGuess.innerText = `Jeg gætter på ${currentGuess}`;
});

correct.addEventListener("click", () => {
  alert(`Yay! Jeg gættede dit tal på ${myScore} forsøg!`);
});
