import React, {useState} from 'react';

function Boom({name}) {
    if(name === 'boom'){
        throw new Error('Error')}
    return name

}
const Bomb = () => {
    const [name, setName] = useState( '');
    return (
        <div>
            <input type="text" value={name} placeholder='Your name' onChange={(e)=>setName(e.target.value)}/>
        <Boom name={name} />
        </div>
    );
};

export default Bomb;