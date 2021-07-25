import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import AddTodo from './addtodo/AddTodo'
import Todos from './todos/Todos'

export default function Routes(props) {
     return (
          <BrowserRouter>
                    {props.children}
               <Switch>

                    <Redirect exact from='/' to='todos'/>

                    <Route path='/todos' component={Todos}/>
                    
                    <Route path='/add-todo' component={AddTodo}/>

               </Switch>
          </BrowserRouter>
     )
}
