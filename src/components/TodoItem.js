import React from 'react';
import {useDispatch} from "react-redux";
import {checkedToggle, removeTodo} from "../store/todoSlice";

const TodoItem = ({id, txt, completed}) => {
    const dispatch = useDispatch()

    return (
        <li key={id} className='list-group-item'>
            <div><input className="form-check-input me-1" type="checkbox" checked={completed}
                        onChange={() => dispatch(checkedToggle({id}))}/>
                <span>{txt}</span></div>

            <button onClick={() => dispatch(removeTodo({id}))} type="button" className="btn-close" aria-label="Close"></button>
        </li>
    );
};

export default TodoItem;