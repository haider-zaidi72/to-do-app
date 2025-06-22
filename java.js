let data = JSON.parse(localStorage.getItem("tasks")) || [];

window.onload = function () {
    updateTaskList();
};

function addTask() {
    let inPut = document.getElementById('todoapp');
    let task = inPut.value.trim();

    if (task === "") {
        alert("Empty task is not allowed");
        return;
    }

    data.push(task);
    inPut.value = '';
    localStorage.setItem("tasks", JSON.stringify(data));
    updateTaskList();
}

function updateTaskList() {
    let taskList = document.getElementById('taskList');
    let taskCount = document.getElementById('taskcount');
    taskList.innerHTML = '';

    data.forEach((task, index) => {
        let li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });

    taskCount.textContent = data.length;
}

function clearAll() {
    data = [];
    localStorage.removeItem("tasks");
    updateTaskList();
}
