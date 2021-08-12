import React ,{ useState } from 'react'

     function ToDoList() {
     const [input ,setInput]= useState('');
     const handleSubmit = e =>{
         e.preventDefault();
         props.onsubmit({
             id:Math.floor(Math.random() * 10000),
             text: input
         })
     };

    return (
        <form className="todo-form" onsubmit={handleSubmit}>
          <input type='text'
           placeholder='add a todo' 
           value={input}
            name='text'
            className='todo-input' /> 
            <button className='todo-button'>Add todo </button>    
        </form>
    )
}
export default ToDoList