import React from 'react';
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todo.todos)

    return (
        <div className="todoList">
            <ul>
                {todos.map(todo =>
                    <TodoItem key={todo.id}  {...todo} />)}
            </ul>
        </div>
    );
};

export default Todos;