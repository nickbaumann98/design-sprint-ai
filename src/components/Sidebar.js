import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ stickyNotes, addNote }) => {
    const [noteInput, setNoteInput] = useState("");

    const handleAddNote = () => {
        addNote(noteInput);
        setNoteInput("");
    };

    return (
        <div className="sidebar">
            <h2>Sticky Notes</h2>
            <input 
                type="text" 
                value={noteInput} 
                onChange={(e) => setNoteInput(e.target.value)} 
                placeholder="Add a quick note..."
            />
            <button onClick={handleAddNote}>Add Note</button>
            <div className="notes">
                {stickyNotes.map((note, index) => (
                    <div key={index} className="note">{note}</div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
