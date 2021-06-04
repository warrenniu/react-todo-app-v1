import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const months = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    }

    let showDate = new Date();

    function displayMonth(key) {
        for (key in months) {
            if (parseInt(key) === (showDate.getMonth() + 1)) {
            return months[key]
            }
        }
    }

    console.log(months[1])
    console.log(displayMonth(6))

    let displayTodaysDate = showDate.getDate() + " " + showDate.getFullYear();

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(todo => todo.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArray = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArray)
    }


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos)
    }

    

    return (
        
        <div>
            <h1>Today's Date: {displayMonth(showDate.getMonth() + 1)} {displayTodaysDate}</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList