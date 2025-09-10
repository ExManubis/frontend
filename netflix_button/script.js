// DOM Elements
const button = document.querySelector('#netflixButton');
const overlay = document.querySelector('.overlay');
const site = document.querySelector('html');
const body = document.querySelector('body');

// State
let timer = 0;
let intervalId;

function fillOverlay() {
	timer++;
	overlay.style.width = `${timer * (100 / 600)}%`;
	timer >= 600 ? resetOverlay() : null;
}

function resetOverlay() {
	overlay.style.borderRadius = '6px';
	body.classList.add('active');
	clearInterval(intervalId);
	intervalId = null;
}

function interval() {
	intervalId ??= setInterval(fillOverlay, 16); // 16ms = 60fps
}

function cancelAnimation() {
	overlay.style.borderRadius = '6px';
	overlay.style.width = '100%';
	clearInterval(intervalId);
}

document.addEventListener('DOMContentLoaded', () => {
	interval();
	site.addEventListener('pointermove', cancelAnimation);
});
