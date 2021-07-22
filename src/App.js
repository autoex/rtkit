import React from 'react';
import './App.css'
import {useState} from "react";
import InputForm from "./components/InputForm";
import Todos from "./components/Todos";

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
            <InputForm input={input} addTodo={addTodo} inputHandler={inputHandler}/>
            <Todos todos={todos} checkedToggle={checkedToggle} removeTodo={removeTodo} />

        </div>
    );
};

export default App;