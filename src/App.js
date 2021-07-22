import React from 'react';
import './App.css'
import {useState} from "react";

const App = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const inputHandler = (txt) => {
        setInput(txt);
    };

    const addTodo = () => {
        if (!input.trim().length) return;
        setTodos([
            ...todos, {
                id: new Date().valueOf(),
                completed: false,
                txt: input
            }
        ]);
        setInput('')

    };
    const removeTodo = (id) => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )


    };

    const checkedToggle = (id) => {
       setTodos(
           todos.map(todo=> {
               if( todo.id !== id) return todo;
               return {...todo,
               completed: !todo.completed}
           })
       )

    };
    return (
        <div className='app'>
            <div className='inputForm'>
                <input type="text" placeholder={'Your to do..'} value={input}
                       onChange={event => inputHandler(event.target.value)}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <div className="todoList">
                <ul>
                    {todos.map(todo =>
                        <li key={todo.id}>
                            <input type="checkbox" checked={todo.completed} onChange={()=>checkedToggle(todo.id)}/>
                            <span>{todo.txt}</span>
                            <span onClick={() => removeTodo(todo.id)}>&times;</span>
                        </li>)}
                </ul>
            </div>

        </div>
    );
};

export default App;