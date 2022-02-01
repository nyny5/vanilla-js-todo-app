//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//Event Listeners
todoButton.addEventListener('click', addTodo);



//Functions
function addTodo(event){
    event.preventDefault();
    
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    
    //Create Li
    const newTodo = document.createElemenr('li')
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDive.appendChild(newTodo);

    //Check Mark
    const completedButton = document.createElement('button');
    completedButton.innerText = <i class= "fas fa-check"> Check </i>;
    completedButton.class.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Delete 
    const trashButton = document.createElement('button');
    trashButton.innerText = <i class= "fas fa-check"> Check </i>;
    trashButton.class.add("complete-btn");
    todoDiv.appendChild(trashButton);
    
    //Append to list
    todoList.appendChild(todoDiv);
    
    
}