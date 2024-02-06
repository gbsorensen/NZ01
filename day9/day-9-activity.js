// Accessing elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
// Adding event listener for form submission
taskForm.addEventListener("submit", addTask);

// Function to add a task
function addTask(event) {
	event.preventDefault();

	const taskText = taskInput.value.trim();

	if (taskText !== "") {
		// Create new task item
		const taskItem = document.createElement("li");
		taskItem.textContent = taskText;

		// Create delete button for the task
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.addEventListener("click", deleteTask);

		// Append delete button to the task item
		taskItem.appendChild(deleteButton);

		// Append task item to the task list
		taskList.appendChild(taskItem);

		// Clear the input field
		taskInput.value = "";
	}
}

// Function to delete a task
function deleteTask(event) {
	const taskItem = event.target.parentElement;
	taskList.removeChild(taskItem);
}
