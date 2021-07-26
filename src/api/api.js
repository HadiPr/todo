export const _addTodo = todo => {
     todo.id = `${Date.now()}${Math.floor(Math.random()*1000)}`
     todo.done = false
     const prevTodos = JSON.parse(localStorage.getItem('todos')) || []
     const newTodos = [...prevTodos, todo]
     localStorage.setItem('todos', JSON.stringify(newTodos))
}

export const _getTodos = () => {
     const todos = localStorage.getItem('todos')
     return JSON.parse(todos)
}

export const _deleteTodo = id => {
     let todos = localStorage.getItem('todos')
     todos = JSON.parse(todos)
     const newTodos = todos.filter(item => item.id != id)
     localStorage.setItem('todos', JSON.stringify(newTodos))
     return true
}

export const _editTodo = todo => {
     let todos = localStorage.getItem('todos')
     todos = JSON.parse(todos)
     console.log(todo)
     let target = todos.find(item => item.id == todo.id)
     target = { ...target, ...todo }
     const newTodos = [...todos.filter(item => item.id !== todo.id), target]
     localStorage.setItem('todos', JSON.stringify(newTodos))
}