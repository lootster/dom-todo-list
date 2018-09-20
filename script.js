const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

let toDo = document.querySelector("#todo-list");

//for loop to lopp through items in "tasks" array & append to list
tasks.forEach(function(item) {
	let li = document.createElement("li");
	li.textContent = item;
	toDo.appendChild(li);
})

// css styling: line-through when click on specific item
toDo.addEventListener("click", function(item) {
	item.target.classList.toggle("done");
})

// User input new task and append to existing list
let input = document.querySelector("input");
let button = document.querySelector("button")

button.addEventListener("click", function() {
	let li = document.createElement("li");
	li.textContent = input.value;
	toDo.appendChild(li);
	input.value = "";
})

