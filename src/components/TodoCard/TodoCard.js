import React, { useState } from 'react'
import { CheckCircleFill, PencilFill, TrashFill, XCircleFill } from 'react-bootstrap-icons'

export default function TodoCard(props) {
     const { title, description, done, id } = props.todo
     const { api } = props
     const iconStyle = { transform: 'scale(1.3)', margin: '10px', cursor: 'pointer' }

     return (
          <div className='w-100' className='card-container'>
               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <h4 style={{ padding: '4px', margin: '0', marginRight: 'auto' }} >
                         {title}
                    </h4>
                    <TrashFill color='red' style={iconStyle} onClick={() => api.deleteTodo(id)} />
                    {!done ? <CheckCircleFill color='green' style={iconStyle} onClick={() => api.editTodo({ done: true, id })} /> : null}
                    {done ? <XCircleFill style={iconStyle} onClick={() => api.editTodo({ done: false, id })} /> : null}
               </div>
               <p>{description}</p>
          </div>
     )
}
