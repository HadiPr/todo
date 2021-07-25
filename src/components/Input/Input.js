import React, { Component } from 'react'
import styles from './style.module.css'
class Input extends Component {
     inputHandler = async (e) => {
          const { handler, name } = this.props
          handler(name.toLowerCase(), e.target.value)

     }
     render() {
          return (
               <div style={{margin:'40px auto'}}>
                    <label className={styles.label}>{this.props.name}</label>
                    <input
                         required
                         className={styles.input}
                         onInput={this.inputHandler}
                    />
               </div>
          )
     }
}
export default Input