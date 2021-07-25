import React, { useState } from 'react'
import { _addTodo } from '../../api/api'
import Input from '../../components/Input/Input'

export default function AddTodo() {
     const [state, setNewState] = useState({title:'',description:''})
     const setState= (field, value) => setNewState(prevState=>({...prevState,[field]:value}))
     const addTodo = e => {
          e.preventDefault()
          _addTodo(state)
     }
     return (
          <form onSubmit={addTodo}>
               <Input name='Title' handler={setState}/>
               <Input name='Description' handler={setState}/>
               <button className='' id='submit-button'>Submit</button>
          </form>
     )
}
