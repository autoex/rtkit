import React from 'react';
import {useDispatch} from "react-redux";
import {checkedToggle, removeTodo} from "../store/todoSlice";

const TodoItem = ({id, txt, completed}) => {
    const dispatch = useDispatch()

    return (
        <li key={id}>
            <input type="checkbox" checked={completed} onChange={()=>dispatch(checkedToggle({id}))}/>
            <span>{txt}</span>
            <span onClick={() => dispatch(removeTodo({id}))}>&times;</span>
        </li>
    );
};

export default TodoItem;