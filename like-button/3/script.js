const buttons = document.querySelectorAll('.fa-thumbs-up');

document.addEventListener('DOMContentLoaded', () => {
	buttons.forEach((button) => {
		button.parentNode.dataset.clicks = '0';
	});
});

buttons.forEach((button) => {
	button.parentNode.addEventListener('click', (e) => {
		e.currentTarget.dataset.clicks++;
		clicks = e.currentTarget.dataset.clicks;
		e.currentTarget.innerHTML = `🔥 ${clicks > 1 ? 'Likes' : 'Like'} ${clicks}`;
	});
});
