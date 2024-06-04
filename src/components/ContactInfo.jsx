import { useState } from 'react';
import '../styles/main.css';
import Icon from '@mdi/react';
import {
  mdiEmail,
  mdiPhone,
  mdiGithub,
  mdiLinkedin,
  mdiTextBoxEdit,
  mdiCheckBold,
} from '@mdi/js';

export default function ContactInfo() {
  const [editMode, setEditMode] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <section
      className="flex-column-gap-1"
      onMouseOver={() => setShowButton(true)}
      onMouseLeave={() => (editMode ? null : setShowButton(false))}
    >
      <div className="section-header">
        <hr />
        <div className="section-title">
          <h2 className="section-header">Contact</h2>
          <button
            style={{ visibility: showButton === false ? 'hidden' : 'visible' }}
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
        </div>
        <hr />
      </div>
      <div className="flex-column-gap-2">
        <InfoField
          icon={mdiEmail}
          initState="professional-email@gmail.com"
          inputVisible={editMode}
        />
        <InfoField
          icon={mdiPhone}
          initState="(555) 555-5555"
          inputVisible={editMode}
        />
        <LinkField
          title="Github"
          icon={mdiGithub}
          initState="https://github.com/Ben-Long50"
          inputVisible={editMode}
        />
        <LinkField
          title="Linkedin"
          icon={mdiLinkedin}
          initState="https://www.linkedin.com/in/ben-long-4ba566129/"
          inputVisible={editMode}
        />
      </div>
    </section>
  );
}

function InfoField({ icon, initState, inputVisible }) {
  const [input, setInput] = useState(initState);
  return (
    <div className="info-field">
      <Icon path={icon} size={1.25} />
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

function LinkField({ title, icon, initState, inputVisible }) {
  const [input, setInput] = useState(initState);
  return (
    <div className="info-field">
      <Icon path={icon} size={1.25} />
      <a style={{ display: inputVisible ? 'none' : 'block' }} href={initState}>
        {title}
      </a>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ display: inputVisible ? 'block' : 'none' }}
      />
    </div>
  );
}
