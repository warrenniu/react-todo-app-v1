import React, {useState} from 'react'

function TodoForm() {
    const [input, setInput] = useState('');

    const handleSubmit = event => {
        event.preventDefault()
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add a todo" 
                value={input} 
                name="text" 
                className="todo-input"
            >
            </input>
            <button className="todo-button">Add todo</button>

        </form>
    )
};

export default TodoForm

