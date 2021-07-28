import React from 'react';
import './App.css'
import {useState} from "react";
import InputForm from "./components/InputForm";
import Todos from "./components/Todos";
import {useDispatch} from "react-redux";
import {addTodo} from "./store/todoSlice";
import {Route, Switch} from "react-router-dom";
import Bomb from "./components/Bomb";

const App = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');


    const addTask = (e) => {
        e.preventDefault()
        if (!input.trim().length) return;
        dispatch(addTodo({input}));
        setInput('')

    };

    return (
        <div className='app'>
            <Switch>
                <Route path='/' exact>
                    <InputForm input={input} addTask={addTask} inputHandler={setInput}/>
                    <Todos/>
                </Route>
                <Route path='/bomb' component={Bomb} />
            </Switch>
        </div>
    );
};

export default App;