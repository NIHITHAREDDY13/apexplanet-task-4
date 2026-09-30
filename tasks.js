// ===============================
// StudentHub Task Manager
// ===============================

// Get elements from HTML
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const taskCount = document.getElementById("taskCount");


// ===============================
// Load tasks from localStorage
// ===============================

let tasks = JSON.parse(localStorage.getItem("studentHubTasks")) || [];


// ===============================
// Save tasks to localStorage
// ===============================

function saveTasks() {
    localStorage.setItem("studentHubTasks", JSON.stringify(tasks));
}


// ===============================
// Display Tasks
// ===============================

function displayTasks() {

    // Clear existing task list
    taskList.innerHTML = "";

    // If there are no tasks
    if (tasks.length === 0) {

        emptyMessage.style.display = "block";
        taskCount.textContent = "0 Tasks";

        return;
    }

    // Hide empty message
    emptyMessage.style.display = "none";

    // Update task count
    taskCount.textContent =
        `${tasks.length} ${tasks.length === 1 ? "Task" : "Tasks"}`;


    // Display every task
    tasks.forEach(function(task) {

        // Create task container
        const taskItem = document.createElement("div");

        taskItem.className = "task-item";


        // Add completed class
        if (task.completed) {
            taskItem.classList.add("completed");
        }


        // ===============================
        // Task Content
        // ===============================

        const taskContent = document.createElement("div");

        taskContent.className = "task-content";


        // ===============================
        // Checkbox
        // ===============================

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = task.completed;

        checkbox.className = "task-checkbox";


        // Checkbox event
        checkbox.addEventListener("change", function() {

            task.completed = checkbox.checked;

            saveTasks();

            displayTasks();

        });


        // ===============================
        // Task Text
        // ===============================

        const taskText = document.createElement("span");

        taskText.textContent = task.text;

        taskText.className = "task-text";


        // Completed task styling
        if (task.completed) {

            taskText.style.textDecoration = "line-through";

            taskText.style.opacity = "0.6";
        }


        // Add checkbox
        taskContent.appendChild(checkbox);

        // Add task text
        taskContent.appendChild(taskText);


        // ===============================
        // Delete Button
        // ===============================

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete-task";


        // Delete task
        deleteButton.addEventListener("click", function() {

            tasks = tasks.filter(function(item) {

                return item.id !== task.id;

            });

            saveTasks();

            displayTasks();

        });


        // ===============================
        // Add Elements
        // ===============================

        taskItem.appendChild(taskContent);

        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

    });
}


// ===============================
// Add New Task
// ===============================

function addTask() {

    const taskText = taskInput.value.trim();


    // Prevent empty task
    if (taskText === "") {

        alert("Please enter a task.");

        taskInput.focus();

        return;
    }


    // Create new task
    const newTask = {

        id: Date.now(),

        text: taskText,

        completed: false

    };


    // Add task to array
    tasks.push(newTask);


    // Save task
    saveTasks();


    // Clear input
    taskInput.value = "";


    // Refresh task list
    displayTasks();


    // Focus input again
    taskInput.focus();
}


// ===============================
// Add Task Button
// ===============================

addTaskBtn.addEventListener("click", addTask);


// ===============================
// Press Enter to Add Task
// ===============================

taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        addTask();

    }

});


// ===============================
// Display Saved Tasks
// ===============================

displayTasks();