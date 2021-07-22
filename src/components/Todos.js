import React from 'react';
import TodoItem from "./TodoItem";

const Todos = ({todos, checkedToggle, removeTodo}) => {

    return (
        <div className="todoList">
            <ul>
                {todos.map(todo =>
                    <TodoItem key={todo.id}  {...todo} checkedToggle={checkedToggle} removeTodo={removeTodo}/>)}
            </ul>
        </div>
    );
};

export default Todos;