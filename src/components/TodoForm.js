import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = event => {
        event.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        });

        setInput("")
    };

    const handleChange = event => {
        setInput(event.target.value)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? ( 
            <>
            <input 
                type="text" 
                placeholder="Update your item" 
                value={input} 
                name="text" 
                className="todo-input edit"
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="todo-button edit">Update</button>
            </>
            )
             :
            (
            <>    
            <input 
                type="text" 
                placeholder="Add a todo" 
                value={input} 
                name="text" 
                className="todo-input"
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="todo-button">Add todo</button>
            </>
            )
            }
            
            

        </form>
    )
};

export default TodoForm

