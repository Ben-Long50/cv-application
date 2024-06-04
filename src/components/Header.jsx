import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiTextBoxEdit, mdiCheckBold } from '@mdi/js';
import '../styles/main.css';
import '../styles/header.css';

export default function Header() {
  const [editMode, setEditMode] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <section
      className="header"
      onMouseOver={() => setShowButton(true)}
      onMouseLeave={() => (editMode ? null : setShowButton(false))}
    >
      <div className="header-container">
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
        <button
          style={{
            visibility: showButton === false ? 'hidden' : 'visible',
          }}
          onClick={() => setEditMode(!editMode)}
        >
          {!editMode ? (
            <Icon
              className="interactive-icon"
              path={mdiTextBoxEdit}
              size={1.25}
            />
          ) : (
            <Icon
              className="interactive-icon"
              path={mdiCheckBold}
              size={1.25}
            />
          )}
        </button>
        <div className="profile-img"></div>
      </div>
    </section>
  );
}

function InfoField({ title, inputVisible, classList }) {
  const [input, setInput] = useState(title);
  return (
    <div>
      <h1
        className={classList}
        style={{ display: inputVisible ? 'none' : 'block' }}
      >
        {input}
      </h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ display: inputVisible ? 'block' : 'none' }}
      />
    </div>
  );
}
