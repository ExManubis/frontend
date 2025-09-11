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
	overlay.style.width = `${timer * (100 / 600)}%`; // 100% = 10 seconds
	timer >= 600 ? resetOverlay() : null; // 600 = 10 seconds
}

function resetOverlay() {
	overlay.style.borderRadius = '6px';
	body.classList.add('active');
	clearInterval(intervalId);
	intervalId = null;
	button.classList.add('hidden');
	setTimeout(animationEnd, 3500);
}

function animationEnd() {
	body.classList.remove('active');
	body.style.backgroundImage = 'none';
	body.style.backgroundColor = 'black';
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
