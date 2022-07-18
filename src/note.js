import React from 'react';

function Note(props) {

    function handleClick(){
        props.func(props.id);
    }

    return (
        <div className='note-item'>
            <h1>{props.note}</h1>
            <p>{props.para}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}

export default Note ;