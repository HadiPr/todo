import React, { Component } from 'react'
import { _editTodo, _getTodos } from '../../api/api'
import TodoCard from '../../components/TodoCard/TodoCard'
import { _deleteTodo } from '../../api/api'

export default class Todos extends Component {
     state = {
          showDone: false,
          todos: []
     }
     componentDidMount() {
          const todos = _getTodos()
          this.setState({ todos })
     }
     deleteTodo(id) {
          _deleteTodo(id)
          this.setState(prevState => ({ todos: prevState.todos.filter(item => item.id != id) }))
     }
     editTodo(todo) {
          _editTodo(todo)
          this.setState(prevState => ({
               todos: prevState.todos.map(item => {
                    if (todo.id == item.id) return { ...item, ...todo }
                    return item
               })
          }))
     }
     render() {
          return (
               <section style={{height:'75%'}}>
                    <ul className="nav nav-tabs mb-2">
                         <li className={`nav-item w-50 ${!this.state.showDone ? 'custome-active' : ''}`}
                              style={{ textAlign: 'center' }}
                              onClick={() => this.setState({ showDone: false })}>

                              <a className="nav-link " aria-current="page" href="#">Remaining</a>
                         </li>

                         <li className={`nav-item w-50 ${this.state.showDone ? 'custome-active' : ''}`}
                              style={{ textAlign: 'center' }}
                              onClick={() => this.setState({ showDone: true })}>

                              <a className="nav-link " href="#">Done</a>
                         </li>

                    </ul>
                    <div id='scrolled-div' style={{overflowY:'scroll',height:'88%'}}>
                    {
                         this.state.todos && this.state.todos.filter(todo => todo.done === this.state.showDone).map(todo => (
                              <TodoCard todo={todo} api={{ deleteTodo: this.deleteTodo.bind(this), editTodo: this.editTodo.bind(this) }} />
                         ))
                    }
                    </div>
               </section>
          )
     }
}
