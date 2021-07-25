export const _addTodo = todo => {
     todo.createdAt = Date.now()
     todo.done = false
     const prevTodos = JSON.parse(localStorage.getItem('todos')) || []
     const newTodos = [...prevTodos, todo]
     localStorage.setItem('todos', JSON.stringify(newTodos))
}

export const _getTodos = () => {
     const todos = localStorage.getItem('todos')
     return JSON.parse(todos)
}