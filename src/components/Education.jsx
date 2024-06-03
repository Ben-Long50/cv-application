import { useState } from 'react';
import { schoolList, School } from './educationData.js';

export default function EducationInfo() {
  const [schools, setSchools] = useState(schoolList);
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
          <h2>Education</h2>
          <button
            onClick={() => {
              console.log(schoolList);
              setSchools([
                ...schoolList,
                new School('School Name', '', '', ''),
              ]);
            }}
            style={{ display: showButton === false ? 'none' : 'block' }}
          >
            +
          </button>
        </div>
        <hr />
      </div>
      {schools.map((school) => (
        <Education
          key={school.id}
          schoolName={school.name}
          degree={school.degree}
          gpa={school.gpa}
          graduationDate={school.graduationDate}
        />
      ))}
    </section>
  );
}

function Education({ schoolName, degree, gpa, graduationDate }) {
  const [editMode, setEditMode] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <div>
      <div
        className="section-title"
        onMouseOver={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <HeaderField
          title={schoolName}
          initState={schoolName}
          inputVisible={editMode}
        />
        <button
          onClick={() => setEditMode(!editMode)}
          style={{ display: showButton === false ? 'none' : 'block' }}
        >
          {!editMode ? 'Edit' : 'Submit'}
        </button>
      </div>
      <InfoField title="Degree" initState={degree} inputVisible={editMode} />
      <InfoField title="GPA" initState={gpa} inputVisible={editMode} />
      <InfoField
        title="Graduated"
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
      <h2 style={{ display: inputVisible ? 'none' : 'block' }}>{title}</h2>
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
      {/* <h3>{title}</h3> */}
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
