//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//EVENT LISTENERS
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo);


//FUNCTIONS

function addTodo(event){
    //prevent default behaviour of submitting
    event.preventDefault();

    //Creating div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //Creating li
    const newTodo = document.createElement('li');
    newTodo.innerText= todoInput.value;
    newTodo.classList.add('todo-item');

    //putting the li inside the div
    todoDiv.appendChild(newTodo);

    //checkmark Button
    const completedButton= document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // trash Button
    const trashButton= document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append to todo-list
    todoList.appendChild(todoDiv);

      // clearing the todoinput value
      todoInput.value="";

}

function deleteCheck (e) {
    const item = e.target;
    //DELETE todo

    if(item.classList[0] ===  "trash-btn") {
        const todo = item.parentElement;
        //Animation

        //first the animation will start
        todo.classList.add("fall");

        //Then right after it li will be deleted
        todo.addEventListener("transitionend",function(){
        todo.remove();
        });
        
    }

    //Check Mark
    if(item.classList[0] ===  "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;

             case "completed":
                 if (todo.classList.contains('completed')){
                     todo.style.display = 'flex';
                     
                 }
                 else {
                     todo.style.display = 'none';
                 }

                 break;
            case "uncompleted":
                if(!todo.classList.contains("completed")) {
                    todo.style.display = "flex";

                }
                else {
                    todo.style.display = "none";
                }
                break;
        }
    });

    

}



