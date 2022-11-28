
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");
const search = document.querySelector(".search")
const completedTasks = document.querySelector(".completedTasks")
const importTasks = document.querySelector(".importantTasks")

let todoList = [];

const renderTodos = () => {
    list_el.innerHTML = null
    todoList.forEach(todo => {

        list_el.innerHTML += `
    <div class="${todo.important ? "task important " : 'task '}" data-important = "${todo.id}" }>
    <form class="check">
    <input type="checkbox"  data-check = "${todo.id}" ${todo.checked ? "checked" : ''}>
    </form>
    <form>
    <input type="text" class="new-task" data-new-task = "${todo.id}"   value = "${todo.todo}" readonly>
    </form>
    <div class ="actions">
    <button class="edit" data-edit-id="${todo.id}">Edit</button>
    <button class="delete" data-delete-id="${todo.id}">Delete</button>
    </div>
    </div>
`
    })
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(input.value === ""){
        alert("Введите задачу")

    }else {
        const newTodo = {
            id: Math.random(),
            todo: input.value,
            checked: false,
            important: false
        }
        todoList.unshift(newTodo)
        localStorage.setItem("tasks", JSON.stringify(todoList))
        renderTodos(todoList)
        form.reset()
    }})
let todosFromStorage = JSON.parse(localStorage.getItem('tasks'))
console.log(todosFromStorage)

if (todosFromStorage) {
    todoList = todosFromStorage || []
    renderTodos(todoList)
}
const deleteTask = () => {
    list_el.addEventListener("click", (e) => {
        const taskId = e.target.getAttribute("data-delete-id")
        if(taskId){
            todoList = todoList.filter(task => task.id !== +taskId)
            localStorage.setItem("tasks" , JSON.stringify(todoList))
            renderTodos(todoList)
        }
    })
}
deleteTask()

const editTask = () => {
    list_el.addEventListener("click", (e) => {
        e.preventDefault()
        let editId = e.target.getAttribute("data-edit-id")
        const task = todoList.find(todo => todo.id === +editId)
        const taskId = document.querySelector(`[data-new-task = "${editId}"]`)
        if(e.target.innerText.toLowerCase() ==="edit"){
            taskId.removeAttribute("readonly");
            e.target.innerText = "save"
        } else if ( e.target.innerText.toLowerCase() === "save") {
            taskId.setAttribute("readonly", "readonly")
            e.target.innerText = "Edit"
            console.log(task)
            task.todo = taskId.value
        }
    })
}
editTask()


const checkTask = () => {
    list_el.addEventListener("click", (e) => {
        const checkId = e.target.getAttribute("data-check")
        let taskId = todoList.find(item => item.id === +checkId )
        if (taskId){


            taskId.checked = !taskId.checked
        }
        localStorage.setItem("tasks" , JSON.stringify(todoList))
    })}

checkTask()

const importantTask = () =>{
list_el.addEventListener("contextmenu",  (e) => {
        e.preventDefault();
    const impId = e.target.getAttribute("data-important")
    let taskId = todoList.find(item => item.id === +impId )
    if (taskId){
        taskId.important = !taskId.important
    }
    localStorage.setItem("tasks" , JSON.stringify(todoList))
    renderTodos()
    }
)}
importantTask()

const searchTask = () => {
    search.addEventListener("input",(e) => {
        if(e.target.value === ""){
            todoList = JSON.parse(localStorage.getItem("tasks"))
        }
        todoList = JSON.parse(localStorage.getItem("tasks"))
        todoList = todoList.filter(todo => todo.todo.includes(e.target.value) === true )

        renderTodos(todoList)
    } )
}
searchTask()


const tasksCompleted = () => {
    completedTasks.addEventListener("click",(e) => {
    if(true) {
        todoList = todoList.filter(todo => todo.checked === true )

        renderTodos(todoList)

}})
}
tasksCompleted()




const importantTasks = () => {
    importTasks.addEventListener("click",(e) => {

        todoList = todoList.filter(todo => todo.important === true )

        renderTodos(todoList)
    } )
}
importantTasks()