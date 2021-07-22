import React from 'react';

const InputForm = ({input, inputHandler, addTodo}) => {
    return (
        <div className='inputForm'>
            <input type="text" placeholder={'Your to do..'} value={input}
                   onChange={event => inputHandler(event.target.value)}/>
            <button onClick={addTodo}>Add</button>
        </div>
    );
};

export default InputForm;