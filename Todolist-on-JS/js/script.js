const listBody = document.getElementById("list-body");
const listInputBody = document.getElementById("list-input-body");
const listInput = document.getElementById("list-input");
const listActivity = document.getElementById("list-activity");
const sendButton = document.getElementById("send-button");
const task = document.getElementById("tasks-template").content.firstElementChild;
let tasks = [{
    counter: 0,
    status: "false",
    task: "Buy tickets"
}];
let counter = -1;
let test = "";
createList()
if ((typeof window.localStorage != 'undefined') && (localStorage.getItem("todoList") != undefined)) {
    tasks = JSON.parse(localStorage.getItem("todoList"));
    createList()
}
sendButton.addEventListener("click", function (e) {

    if (listInput.value && !(listInput.value.trim() == '')) {
        const currentTask = {};
        currentTask.task = listInput.value;
        currentTask.status = "false";
        counter++;
        currentTask.counter = counter;
        listInput.value = "";
        tasks.push(currentTask);
        createList()
        localStorage.setItem("todoList", JSON.stringify(tasks))
    }

})
listInput.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        if (listInput.value && !(listInput.value.trim() == '')) {
            const currentTask = {};
            currentTask.task = listInput.value;
            currentTask.status = "false";
            counter++;
            currentTask.counter = counter;
            listInput.value = "";
            tasks.push(currentTask);
            createList()
            localStorage.setItem("todoList", JSON.stringify(tasks))
        }
    }


})

function createList() {
    listActivity.innerHTML = "";
    for (let i = 0; i <= tasks.length - 1; i++) {
        const newDiv = task.cloneNode(true);
        const done = newDiv.querySelector(".task-done");
        const notDone = newDiv.querySelector(".task-not-done")
        const paragraph = newDiv.querySelector("p");
        newDiv.setAttribute("id", i)
        newDiv.firstElementChild.textContent = tasks[i].task;
        if (tasks[i].status == "true") {
            paragraph.style.textDecoration = "line-through";

        }
        if (tasks[i].status == "false") {

            paragraph.style.textDecoration = "none";
        }
        listActivity.appendChild(newDiv);
        newDiv.addEventListener("click", function (e) {
            if (e.target == done) {
                paragraph.style.textDecoration = "line-through";
                tasks[i].status = "true";
                localStorage.setItem("todoList", JSON.stringify(tasks))
            }
            if (e.target == notDone) {
                paragraph.style.textDecoration = "none";
                this.remove()
                tasks.splice(i, 1)
                localStorage.setItem("todoList", JSON.stringify(tasks))
            }
        })


    }
}