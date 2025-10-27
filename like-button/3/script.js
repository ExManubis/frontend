const buttons = document.querySelectorAll('.fa-thumbs-up');

document.addEventListener('DOMContentLoaded', () => {
	buttons.forEach((button) => {
		button.parentNode.dataset.clicks = '1';
		button.parentNode.addEventListener('click', (e) => {
			clicks = e.currentTarget.dataset.clicks++;
			e.currentTarget.innerHTML = `<i class="fa fa-thumbs-up"></i>${clicks > 1 ? ' Likes' : ' Like'} ${clicks}`;
		});
	});
});
