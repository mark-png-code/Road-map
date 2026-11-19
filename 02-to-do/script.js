//------- 1. Console log -------
console.log("Connected");


// ----- 2. To do list -----
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const clearButton = document.getElementById("clear-completed-button");
const emptyMessage = document.getElementById("empty-list-message");
const filterAllButton = document.getElementById("filter-all");
const filterActiveButton = document.getElementById("filter-active");
const filterCompletedButton = document.getElementById("filter-completed");

let tasks = [];
let filter = "all"; // Possible values: "all", "active", "completed"

function render() {
    list.innerHTML = "";
    emptyMessage.hidden = tasks.length > 0;
    let visibleTasks;
    if (filter === "all") {
        visibleTasks = tasks;
    } else if (filter === "active") {
        visibleTasks = tasks.filter((task) => !task.done);
    } else if (filter === "completed") {
        visibleTasks = tasks.filter((task) => task.done);
    }
    visibleTasks.forEach(function (task) {
        const listItem = document.createElement("li");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        listItem.textContent = task.text;
        list.appendChild(listItem);
        listItem.appendChild(deleteButton);
        if (task.done) {
                listItem.classList.add("done");
            } else {
                listItem.classList.remove("done");
            }
        listItem.addEventListener("click", function () {
            task.done = !task.done;
            render();
        });
        deleteButton.addEventListener("click", function (event) {
            event.stopPropagation();
            tasks = tasks.filter((t) => t !== task);
            render();
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    const remainingTasks = tasks.filter((task) => !task.done);
    taskCount.textContent = `Total tasks: ${tasks.length}, Remaining: ${remainingTasks.length}`;
    filterAllButton.classList.toggle("active", filter === "all");
    filterActiveButton.classList.toggle("active", filter === "active");
    filterCompletedButton.classList.toggle("active", filter === "completed");
}



// Load tasks from localStorage on page load
window.addEventListener("load", function () {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    render();
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskText = input.value.trim();
    if (taskText === "") {
        return;
    }
    console.log("Task added:", taskText);
    tasks.push({ text: taskText, done: false });
    render();
    input.value = "";
});


clearButton.addEventListener("click", function () {
    const remainingTasks = tasks.filter((task) => !task.done);
    tasks = remainingTasks;
    render();
});

filterAllButton.addEventListener("click", function () {
    filter = "all";
    render();
});

filterActiveButton.addEventListener("click", function () {
    filter = "active";
    render();
});

filterCompletedButton.addEventListener("click", function () {
    filter = "completed";
    render();
});



