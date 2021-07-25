import React from 'react'
import { CheckCircleFill, PencilFill, TrashFill } from 'react-bootstrap-icons'

export default function TodoCard(props) {
     const { title, description, done } = props.todo
     const iconStyle = { transform: 'scale(1.3)', margin: '10px', cursor:'pointer'}
     return (
          <div className='w-100' className='card-container'>
               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <h4 style={{ padding: '4px', margin: '0', marginRight: 'auto' }} >{title}</h4>
                    <TrashFill color='red' style={iconStyle} />
                    <PencilFill alt='Edit' style={iconStyle} />
                    <CheckCircleFill color='green' style={iconStyle} />
               </div>
               <p>{description}</p>
          </div>
     )
}
