const dataViz = document.getElementById('data-viz');

function getData() {
	fetch('https://kea-alt-del.dk/kata-distortion/')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			dataViz.innerHTML = `<h2>${data.inQueue} people in queue</h2>`;
		});
}

document.addEventListener('DOMContentLoaded', () => {
	getData();
	setInterval(getData, 10000);
});
