import Header from './header';
import CreateNote from './createnote';
import { useState } from 'react';
import Note from './note';

function App() {
  var [notes , setNotes] = useState([]);

  function noteArray (obj){
    setNotes((prevNotes) => {
      return [...prevNotes , obj];
    })
  }

  function deleteItem(id){
    setNotes((prevNotes) => {
      return [...prevNotes].filter((noteItem , index) => {
        return index !== id ;
      })
    })
  }

  return (
    <div>
      <Header /> 
      <CreateNote 
        func = {noteArray}
      />
      {notes.map( (item , index) => {
        return (
          <Note
            key = {index} 
            note = {item.title}
            para = {item.note}
            func = {deleteItem}
            id = {index}
          />
        );
      })}
    </div>
  );
}

export default App;
