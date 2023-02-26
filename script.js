//Define UI Vars
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#tasks');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

//Load all event listeners
loadEventListeners();

function loadEventListeners() {
    //add task event
    form.addEventListener('submit', addTask);  
}

// Add task

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }

    //Createli element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    //Create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = documento.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innnerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild('link');

    //Append li to ul
    taskList.appendChild('li');

    //clear input
    taskInput.value = '';
    

    e.preventDefault();
}