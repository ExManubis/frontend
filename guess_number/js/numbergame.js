"use strict";

// Get form
const guessForm = document.getElementById("guessForm");
const numberGuessed = document.getElementById("guessInput");

// Get result section
const yourGuess = document.getElementById("yourGuess");
const resultSection = document.getElementById("result");
const winGif = document.getElementById("winGif");
const score = document.getElementById("score");

// Generate number
const randomNumber = Math.round(Math.random() * 100);

// Set score
let Yourscore = 1;

// Get submitted number
guessForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let numberInput = numberGuessed.value;
  yourGuess.innerText = `Du gættede på: ${numberInput}`;
  score.innerText = `Antal gæt: ${Yourscore.toString()}`;
  if (numberInput == randomNumber) {
    resultSection.innerText = "Tillykke! Du gættede rigtigt!";
    winGif.style.display = "block";
  }
  if (numberInput > randomNumber) {
    resultSection.innerText = "For højt. Prøv igen!";
  }
  if (numberInput < randomNumber) {
    resultSection.innerText = "For lavt. Prøv igen!";
  }
  Yourscore++;
  return numberInput;
});

