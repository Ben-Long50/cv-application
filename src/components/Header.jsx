import { useState } from 'react';
import '../styles/main.css';

export default function Header() {
  const [editMode, setEditMode] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <section
      className="header"
      onMouseOver={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <div className="section-title">
        <div className="header-info">
          <InfoField
            title="Ben Long"
            inputVisible={editMode}
            classList={'header-name'}
          />
          <InfoField
            title="Web Development Engineer and Mechanical Engineer"
            inputVisible={editMode}
            classList={'header-title'}
          />
        </div>
        <div className="profile-img"></div>
        <button
          style={{ display: showButton === false ? 'none' : 'inline' }}
          onClick={() => setEditMode(!editMode)}
        >
          {!editMode ? 'Edit' : 'Submit'}
        </button>
      </div>
    </section>
  );
}

function InfoField({ title, inputVisible, classList }) {
  const [input, setInput] = useState(title);
  return (
    <div className={classList}>
      <h1 style={{ display: inputVisible ? 'none' : 'block' }}>{input}</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ display: inputVisible ? 'block' : 'none' }}
      />
    </div>
  );
}
