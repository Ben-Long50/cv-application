import { useState } from 'react';
import { schoolList, School } from './educationData.js';
import Icon from '@mdi/react';
import {
  mdiTextBoxEdit,
  mdiCheckBold,
  mdiPlusThick,
  mdiMinusThick,
} from '@mdi/js';

export default function EducationInfo() {
  const [schools, setSchools] = useState(schoolList);
  const [showButton, setShowButton] = useState(false);
  return (
    <section className="flex-column-gap-1">
      <div
        className="section-header"
        onMouseOver={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <hr />
        <div className="section-title">
          <h2 className="section-header">Education</h2>
          <div className="button-container">
            <button
              className="desc-remove-but"
              onClick={() => {
                const newList = schools.slice(0, -1);
                setSchools(newList);
              }}
              style={{
                visibility: showButton === false ? 'hidden' : 'visible',
              }}
            >
              <Icon
                className="interactive-icon"
                path={mdiMinusThick}
                size={1.25}
              />
            </button>
            <button
              onClick={() => {
                setSchools([...schools, new School('School Name', '', '', '')]);
              }}
              style={{ display: showButton === false ? 'none' : 'block' }}
            >
              <Icon
                className="interactive-icon"
                path={mdiPlusThick}
                size={1.25}
              />
            </button>
          </div>
        </div>
        <hr />
      </div>
      <div className="flex-column-gap-1">
        {schools.map((school) => (
          <Education
            key={school.id}
            schoolName={school.name}
            degree={school.degree}
            gpa={school.gpa}
            graduationDate={school.graduationDate}
          />
        ))}
      </div>
    </section>
  );
}

function Education({ schoolName, degree, gpa, graduationDate }) {
  const [editMode, setEditMode] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <div
      className="flex-column-gap-2"
      onMouseOver={() => setShowButton(true)}
      onMouseLeave={() => (editMode ? null : setShowButton(false))}
    >
      <div className="section-title">
        <HeaderField
          title={schoolName}
          initState={schoolName}
          inputVisible={editMode}
        />
        <button
          onClick={() => setEditMode(!editMode)}
          style={{ visibility: showButton === false ? 'hidden' : 'visible' }}
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
      <InfoField title="Degree" initState={degree} inputVisible={editMode} />
      <InfoField title="GPA" initState={gpa} inputVisible={editMode} />
      <InfoField
        title="Graduation Date"
        initState={graduationDate}
        inputVisible={editMode}
      />
    </div>
  );
}

function HeaderField({ title, initState, inputVisible }) {
  const [input, setInput] = useState(initState);
  return (
    <div className="info-field">
      <h2
        className="section-name"
        style={{ display: inputVisible ? 'none' : 'block' }}
      >
        {title}
      </h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ display: inputVisible ? 'block' : 'none' }}
      />
    </div>
  );
}

function InfoField({ title, initState, inputVisible }) {
  const [input, setInput] = useState(initState);
  return (
    <div className="info-field">
      <p style={{ display: inputVisible ? 'none' : 'block' }}>
        {title + ': ' + input}
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ display: inputVisible ? 'block' : 'none' }}
      />
    </div>
  );
}
