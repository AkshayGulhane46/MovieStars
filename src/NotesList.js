import React, { useState } from 'react'

function NotesList() {
   const [notes,setNotes] = useState([])
   const [noteInput, setNoteInput] = useState("");

   function createNote(e){
      if(noteInput.length > 0){
            e.preventDefault();
            console.log("set Note is active")
            const newNote = {
                id : Math.random(),
                text : noteInput,
                completed : false
            }

            setNotes(oldNotes => [...oldNotes, newNote])
            console.log(notes);
        setNoteInput(" ")
    }
   }

   function toggleStatus(id){
       setNotes(notes => 
            notes.map(note => 
                note.id === id ? {...note, completed : ! note.completed} : note
            )
        )
   }

   function deleteNote(id){
    console.log("Delete note is active")
    setNotes(newNotes=>
        newNotes.filter(note=> note.id !== id)
    )
   }


  return (
    <>
        <form className='add_form' onSubmit={createNote}>
            <input name='text' type='text' value={noteInput} onChange={e=>setNoteInput(e.target.value)}/>
            <button type='submit'>Add Note</button>
        </form>

       <div className='notes'>
        {
        notes.map((note,index)=>
        <>
            <p key={index}> {note.text} </p> 
            <input type='checkbox'
            checked = {note.completed}
            onChange={()=>toggleStatus(note.id)}
            ></input>   
            <button onClick={()=> deleteNote(note.id)}>Delete</button>
        </>
        )}

       </div>
    </>
    
  )
}

export default NotesList