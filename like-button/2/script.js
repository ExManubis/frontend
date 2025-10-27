const buttons = document.querySelectorAll('.like-button');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.target.dataset.clicks++;
		clicks = e.target.dataset.clicks;
		e.target.innerHTML = `🔥 ${clicks > 1 ? 'Likes' : 'Like'} ${clicks}`;
	});
});
