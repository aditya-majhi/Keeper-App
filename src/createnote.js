import React, { useState } from 'react' ;

function CreateNote (props){
    var [text , setText] = useState({
        title: "",
        note: ""
    });
    
    function handleChange(event){
        var {name , value} = event.target ;

        setText((prevText) => {
            return {
                ...prevText ,
                [name]: value
            }
        })
    }

    function handleClick(){
        props.func(text);
    }
    return (
        <div className='note-block'>
            <form className='note'>
                <input value={text.title} onChange={handleChange} name='title' placeholder='Title'></input>
                <textarea value={text.note} onChange={handleChange} name='note' placeholder='Take Notes...' rows={4}></textarea>
            </form>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default CreateNote;