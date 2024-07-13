import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import ToggleSwitch from './components/ToggleSwitch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedMode) {
      setDarkMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [notes, darkMode]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((note, i) => i !== index);
    setNotes(newNotes);
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="display-4">NOTES KEEPING APP</h1>
          <ToggleSwitch darkMode={darkMode} toggleMode={toggleMode} />
        </div>
        <NoteForm addNote={addNote} />
        <NoteList notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
