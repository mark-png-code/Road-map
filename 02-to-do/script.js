//------- 1. Console log -------
console.log("Connected");


// ----- 2. To do list -----
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskText = input.value.trim();
    if (taskText === "") {
        return;
    }
    console.log("Task added:", taskText);
    input.value = "";
})
