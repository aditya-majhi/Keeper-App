import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

function Note(props) {

    function handleClick(){
        props.func(props.id);
    }

    return (
        <div className='note-item'>
            <h1>{props.note}</h1>
            <p>{props.para}</p>
            <Button onClick={handleClick}><DeleteIcon /></Button>
        </div>
    );
}

export default Note ;