//array to hold tasks
var tasks = [];

//task status 'enum'
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

//task constructor function
function Task (id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

//Creates a new task element and adds it to the DOM
function addTaskElement (task) {
    //create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    //set attributes
    taskEl.setAttribute('id', task.id);

    //add text to task element
    taskEl.appendChild(textEl);

    //add task to list
    listEl.appendChild(taskEl);
} //end addTaskElement

//click handler to add new task
function addTask (event) {
    var inputEl = document.getElementById('input-task');
    if (inputEl.value !== '') {
        //create unique id
        var id = 'item-' + tasks.length;
        
        //create a new task
        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        //add the task to the DOM
        addTaskElement(task);

        //reset input
        inputEl.value = '';
    } //end If
} //end addTask

//Click handler to complete a task
function completeTask (event) {
    //get the task element
    var taskEl = event.target;
    var id = taskEl.id;

    //find the corresponding task in array and update
    for (var i=0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].status = taskStatus.completed;
            break;
        } //end nested if
    } //end for

    //Move task element from active to completed
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
} //end completeTask

//key press handler to auto click add task button
function clickButton (event) {
    if (event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}  // end clickButton

// Initializes in the app
function init () {
    //wire up the add task button click handler
    document.getElementById('add-task').onclick = addTask;

    //wire up the task completed list item click handler
    document.getElementById('active-list').onclick = completeTask;

    //wire up the task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;
} // end init

init();