'use strict';

window.addEventListener('DOMContentLoaded', start);

const allAnimals = [];

function start() {
	console.log('ready');

	loadJSON();
}

function loadJSON() {
	fetch('animals.json')
		.then((response) => response.json())
		.then((jsonData) => {
			// when loaded, prepare objects
			prepareObjects(jsonData);
		});
}

function prepareObjects(jsonData) {
	jsonData.forEach((jsonObject) => {
		// TODO: Create new object with cleaned data - and store that in the allAnimals array
		// TODO: MISSING CODE HERE !!!
		allAnimals.push({
			name: jsonObject.fullname.substring(0, jsonObject.fullname.indexOf(' ')),
			desc: jsonObject.fullname
				.substring(jsonObject.fullname.indexOf('the'), jsonObject.fullname.lastIndexOf(' '))
				.slice(4)
				.trim(),
			type: jsonObject.fullname.substring(jsonObject.fullname.lastIndexOf(' ')).trim(),
			age: jsonObject.age,
		});
	});
	console.log(allAnimals);
	displayList(allAnimals);
}

function displayList(arrayList) {
	// clear the list
	document.querySelector('#list tbody').innerHTML = '';

	// build a new list
	arrayList.forEach(displayAnimal);
}

function displayAnimal(animal) {
	// create clone
	const clone = document.querySelector('template#animal').content.cloneNode(true);

	// set clone data
	clone.querySelector('[data-field=name]').textContent = animal.name;
	clone.querySelector('[data-field=desc]').textContent = animal.desc;
	clone.querySelector('[data-field=type]').textContent = animal.type;
	clone.querySelector('[data-field=age]').textContent = animal.age;

	// append clone to list
	document.querySelector('#list tbody').appendChild(clone);
}

// FILTER
function filterAnimals(type) {
	const filteredAnimals = [];
	allAnimals.forEach((animal) => {
		if (animal.type === type) {
			filteredAnimals.push(animal);
		}
	});
	displayList(filteredAnimals);
}

// RESET
function clear() {
	document.querySelector('tbody').innerHTML = '';
}

// SHOW FILTERED
function showFiltered(type) {
	clear();
	filterAnimals(type);
}

// SHOW ALL
function showAll() {
	clear();
	displayList(allAnimals);
}

// BUTTONS
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		button.value === 'all' ? showAll() : showFiltered(button.value);
	});
});
