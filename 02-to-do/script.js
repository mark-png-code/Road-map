//------- 1. Console log -------
console.log("Connected");


// ----- 2. To do list -----
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

let tasks = [];

function render() {
    list.innerHTML = "";
    tasks.forEach(function (task) {
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
}

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




