import { useState } from 'react';
import '../styles/main.css';

export default function ContactInfo() {
  const [editMode, setEditMode] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <section>
      <div
        className="section-header"
        onMouseOver={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <hr />
        <div className="section-title">
          <h2>Contact</h2>
          <button
            style={{ display: showButton === false ? 'none' : 'block' }}
            onClick={() => setEditMode(!editMode)}
          >
            {!editMode ? 'Edit' : 'Submit'}
          </button>
        </div>
        <hr />
      </div>
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
