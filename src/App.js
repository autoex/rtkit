import React from 'react';
import './App.css'
import {useState} from "react";
import InputForm from "./components/InputForm";
import Todos from "./components/Todos";
import {useDispatch} from "react-redux";
import {addTodo} from "./store/todoSlice";

const App = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');


    const addTask = () => {
        if (!input.trim().length) return;
        dispatch(addTodo({input}));
        setInput('')

    };

    return (
        <div className='app'>
            <InputForm input={input} addTask={addTask} inputHandler={setInput}/>
            <Todos  />

        </div>
    );
};

export default App;