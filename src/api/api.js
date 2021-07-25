export const _addTodo = todo => {
     todo.createdAt = Date.now()
     const prevTodos = JSON.parse(localStorage.getItem('todos')) || []
     const newTodos = [...prevTodos, todo]
     localStorage.setItem('todos', JSON.stringify(newTodos))
}