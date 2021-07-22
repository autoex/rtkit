import React from 'react';

const TodoItem = ({id, txt, completed, checkedToggle, removeTodo}) => {

    return (
        <li key={id}>
            <input type="checkbox" checked={completed} onChange={()=>checkedToggle(id)}/>
            <span>{txt}</span>
            <span onClick={() => removeTodo(id)}>&times;</span>
        </li>
    );
};

export default TodoItem;