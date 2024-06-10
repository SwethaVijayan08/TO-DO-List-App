// Mock data for initial todo list
let todoTasks = [
    'Complete report for weekly meeting',
    'Pay utility bills',
    'Schedule dentist appointment',
    'Buy groceries',
    'Call family member'
];

// Function to render the todo list
function renderTodoList() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todoTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.dataset.index = index; // Store the task index as a data attribute
        li.addEventListener('click', completeTask);
        todoList.appendChild(li);
    });
}

// Function to add a new task to the todo list
document.getElementById('addTaskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskName = document.getElementById('taskName').value;
    todoTasks.push(taskName);
    renderTodoList();
    document.getElementById('taskName').value = '';
});

// Function to mark a task as completed
function completeTask() {
    const index = this.dataset.index;
    todoTasks.splice(index, 1); // Remove the task at the specified index
    renderTodoList();
}

// Initial rendering of the todo list
renderTodoList();
