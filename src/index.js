import "./style.css";

/* ----- DOM Query Selectors ----- */
const WebList = document.querySelector(".card-list");

/* ----- Global Data ----- */
const taskList = [];

/* ----- Classes ----- */
class Task {
    constructor(title, description, dueDate) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
}

/* ----- Utility Functions ----- */
function render() {
    WebList.innerHTML = "";
    taskList.forEach((task) => DOMHandler.addTaskToDOM(task));
}

const DOMHandler = {
    addTaskToDOM(task) {
        const taskCard = document.createElement("div");
        taskCard.classList.add("card");

        const title = document.createElement("p");
        title.textContent = task.title;

        const description = document.createElement("p");
        description.textContent = task.description;

        const dueDate = document.createElement("p");
        dueDate.textContent = task.dueDate;

        taskCard.append(title, description, dueDate);
        WebList.appendChild(taskCard);
    }
}

function createTask(title, description, dueDate) {
    const newTask = new Task(title, description, dueDate);
    taskList.push(newTask);
    render();
}

function deleteTask(task) {

}

/* ----- Event Listeners ----- */
document.querySelector(".new-todo").addEventListener("click", (e) => {
    e.preventDefault();

    const title = prompt("Enter task title:");
    const description = prompt("Enter task description:");
    const dueDate = prompt("Enter task due date (DD-MM-YYYY):");
    createTask(title, description, dueDate);
});