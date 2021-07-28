import React from 'react';

const InputForm = ({input, inputHandler, addTask}) => {

    return (
            <form onSubmit={addTask}  className='inputForm input-group mb-3'>
                <input className='form-control' type="text" placeholder={'Your to do..'} value={input}
                       onChange={event => inputHandler(event.target.value)}/>
                <button className="btn btn-outline-secondary">Add</button>
            </form>
    );
};

export default InputForm;