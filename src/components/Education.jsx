import { useState } from 'react';
import { schoolList, School } from './educationData.js';

export default function EducationInfo() {
  const [schools, setSchools] = useState(schoolList);
  return (
    <section>
      <div>
        <h1>Education</h1>
        <button
          onClick={() => {
            console.log(schoolList);
            setSchools([...schoolList, new School('School Name', '', '', '')]);
          }}
        >
          +
        </button>
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

  return (
    <div>
      <div>
        <HeaderField
          title={schoolName}
          initState={schoolName}
          inputVisible={editMode}
        />
        <button onClick={() => setEditMode(!editMode)}>
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
