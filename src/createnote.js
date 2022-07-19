import React, { useState } from 'react' ;
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

function CreateNote (props){
    var [text , setText] = useState({
        title: "",
        note: ""
    });

    var [isClicked , setClicked] = useState(false);
    
    function handleChange(event){
        var {name , value} = event.target ;

        setText((prevText) => {
            return {
                ...prevText ,
                [name]: value
            }
        })
    }

    function expand(){
        setClicked(true);
    }

    function handleClick(event){
        props.func(text);
        event.preventDefault();
    }
    return (
        <div className='note-block'>
            <form className='note'>
            {isClicked && <input value={text.title} onChange={handleChange} name='title' placeholder='Title'></input> }
                <textarea 
                    onClick={expand} 
                    value={text.note} 
                    onChange={handleChange} 
                    name='note' 
                    placeholder='Take Notes...' 
                    rows={isClicked ? 3 : 1}
                >
                </textarea>
                <Fab onClick={handleClick}><AddIcon /></Fab>
            </form>
        </div>
    );
}

export default CreateNote;