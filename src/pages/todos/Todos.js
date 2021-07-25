import React, { Component } from 'react'
import { _getTodos } from '../../api/api'
import TodoCard from '../../components/TodoCard/TodoCard'

export default class Todos extends Component {
     state = {
          showDone: false,
          todos: []
     }
     componentDidMount() {
          const todos = _getTodos()
          this.setState({ todos })
     }
          
     
     render() {
          return (
               <section >
                    <ul className="nav nav-tabs mb-2">
                         <li className={`nav-item w-50 ${!this.state.showDone ? 'custome-active' : ''}`}
                              style={{ textAlign: 'center' }}
                              onClick={() => this.setState({ showDone: false })}>

                              <a className="nav-link " aria-current="page" href="#">Remaining</a>
                         </li>

                         <li className={`nav-item w-50 ${this.state.showDone? 'custome-active' : ''}`}
                              style={{ textAlign: 'center' }}
                              onClick={() => this.setState({ showDone: true })}>

                              <a className="nav-link " href="#">Done</a>
                         </li>

                    </ul>
                    {
                         this.state.todos.filter(todo=>todo.done===this.state.showDone).map(todo=>(
                              <TodoCard todo={todo}/>
                         ))
                    }
               </section>
          )
     }
}
