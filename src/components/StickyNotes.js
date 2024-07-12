import React, { useState } from 'react';

const StickyNotes = () => {
    const [notes, setNotes] = useState([]);
    const [noteInput, setNoteInput] = useState("");

    const addNote = () => {
        setNotes([...notes, noteInput]);
        setNoteInput("");
    };

    return (
        <div className="sticky-notes">
            <h3>Sticky Notes</h3>
            <textarea 
                value={noteInput} 
                onChange={(e) => setNoteInput(e.target.value)} 
                placeholder="Add a quick note..."
            />
            <button onClick={addNote}>Add Note</button>
            <div>
                {notes.map((note, index) => (
                    <div key={index} className="sticky-note">{note}</div>
                ))}
            </div>
        </div>
    );
};

export default StickyNotes;
