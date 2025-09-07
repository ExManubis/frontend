"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";

// SELECTORS
const header = document.querySelector(".header")
const footer = document.querySelector(".footer")
const selector = document.getElementById('lang')

// Danish
function danish() {
  header.textContent = `${texts.da.texts[0].text}`
  footer.textContent = `${texts.da.texts[1].text}`
 }

// German
function german() {
  header.textContent = `${texts.de.texts[0].text}`
  footer.textContent = `${texts.de.texts[1].text}`
}

function languageSwitcher() {
  locale == "da" ? danish() : german();
}

selector.addEventListener('change', (event) => {
  locale = `${event.target.value}`
  languageSwitcher()
  console.log(locale)
})

languageSwitcher()