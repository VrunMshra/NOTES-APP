import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Note = ({ note, deleteNote }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100" style={{ backgroundColor: note.color }}>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.content}</p>
          <small className="text-muted mt-auto">{note.timestamp}</small>
          <button onClick={deleteNote} className="btn btn-danger mt-2">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
