// List of tasks (initially preloaded tasks)
const tasks = [
  'Wake up',
  'Go to college',
  'Attend classes',
  'Complete assignments',
  'Go back home',
  'Eat food',
  'Prepare for tomorrow'
];

// Function to load tasks into the HTML list
function loadTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = ''; // Clear current list

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
          <span class="task-text">${task}</span>
          <button class="delete" onclick="removeTask(${index})">Delete</button>
      `;
    taskList.appendChild(li);
  });
}

// Function to add a new task to the list
function addTask() {
  const newTaskInput = document.getElementById('new-task');
  const newTask = newTaskInput.value.trim();

  if (newTask) {
    tasks.push(newTask);
    newTaskInput.value = '';  // Clear input field
    loadTasks();  // Reload tasks
  }
}

// Function to remove a task
function removeTask(index) {
  tasks.splice(index, 1);  // Remove task from array
  loadTasks();  // Reload tasks
}

// Initial load
loadTasks();
