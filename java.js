
let data = []

function addTask() {

let inPut = document.getElementById('todoapp');
let task = inPut.value;

data.push(task);
inPut.value = '';
updateTaskList();

if(data.value === ""){
    alert("Empty task is not allowed");
    return;
}
}
function updateTaskList (){
    let taskList = document.getElementById('taskList');
    let taskCount = document.getElementById('taskcount')
    taskList.innerHTML = '';

    data.forEach((task, index)=>{
        let li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
        
    } )
    taskCount.textContent = data.length;
}

function clearAll(){
    data.length = 0;
    updateTaskList();
}