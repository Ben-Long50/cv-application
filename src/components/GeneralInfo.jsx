import { useState } from 'react';
import '../styles/App.css';

export default function GeneralInfo() {
  const [editMode, setEditMode] = useState(false);

  return (
    <section>
      <div>
        <h1>General Information</h1>
        <button onClick={() => setEditMode(!editMode)}>
          {!editMode ? 'Edit' : 'Submit'}
        </button>
      </div>
      <InfoField title="Name" initState="Ben Long" inputVisible={editMode} />
      <InfoField
        title="Email"
        initState="someemail@gmail.com"
        inputVisible={editMode}
      />
      <InfoField
        title="Phone Number"
        initState="(909) 555-5555"
        inputVisible={editMode}
      />
    </section>
  );
}

function InfoField({ title, initState, inputVisible }) {
  const [input, setInput] = useState(initState);
  return (
    <div className="info-field">
      <h3>{title}</h3>
      <p style={{ display: inputVisible ? 'none' : 'block' }}>{input}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ display: inputVisible ? 'block' : 'none' }}
      />
    </div>
  );
}
