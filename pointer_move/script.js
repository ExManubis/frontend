const site = document.querySelector('html');

let currentX = 0;
let currentY = 0;

let color1 = 10;
let color2 = 10;

site.addEventListener('pointermove', (event) => {
	currentX = event.clientX;
	currentY = event.clientY;
	color1 = Math.floor((currentX / window.innerWidth) * 100);
	color2 = Math.floor((currentY / window.innerHeight) * 100);
	console.log(color1);
	console.log(color2);
	site.style.backgroundColor = `hsl(${color1}, 100%, ${color2}%)`;
});
