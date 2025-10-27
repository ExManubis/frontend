const button = document.querySelectorAll('.like-button');

let clickNumber = 0;

button.addEventListener('click', () => {
	clickNumber++;
	button.innerHTML = `🔥 ${clickNumber > 1 ? 'Likes' : 'Like'} ${clickNumber}`;
});
