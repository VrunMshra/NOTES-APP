import React from 'react';
import Note from './Note';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="row">
      {notes.map((note, index) => (
        <Note key={index} note={note} deleteNote={() => deleteNote(index)} />
      ))}
    </div>
  );
};

export default NoteList;
