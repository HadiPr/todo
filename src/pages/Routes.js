import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import AddTodo from './addtodo/AddTodo'
import Todos from './todos/Todos'

export default function Routes(props) {
     return (
          <BrowserRouter>
                    {props.children}
               <Switch>

                    <Redirect exact from='/' to='/todo/todos'/>

                    <Route path='/todo/todos' component={Todos}/>
                    
                    <Route path='/todo/add-todo' component={AddTodo}/>

               </Switch>
          </BrowserRouter>
     )
}
