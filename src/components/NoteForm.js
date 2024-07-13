import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('#ffffff');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const newNote = {
        title,
        content,
        color,
        timestamp: new Date().toLocaleString(),
      };
      addNote(newNote);
      setTitle('');
      setContent('');
      setColor('#ffffff');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 bg-light rounded shadow-sm">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="noteColor" className="form-label">Choose Color:</label>
        <input
          type="color"
          id="noteColor"
          className="form-control form-control-color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Note</button>
    </form>
  );
};

export default NoteForm;
