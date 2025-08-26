"use strict";

// Get form
const guessForm = document.getElementById("guessForm");
const numberGuessed = document.getElementById("guessInput")

// Get result section
const resultSection = document.getElementById("result")

// Generate number
const randomNumber = Math.round(Math.random() * 100);

// Get submitted number
guessForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let numberInput = numberGuessed.value;
    if (numberInput == randomNumber) {
        resultSection.innerText = "Jaaa"
    };
    if (numberInput > randomNumber) {
        resultSection.innerText = "For højt!"
    }
    if (numberInput < randomNumber) {
        resultSection.innerText = "For lavt!"
    }
    console.log(numberInput)
    return numberInput
})

// Debug
console.log(randomNumber);