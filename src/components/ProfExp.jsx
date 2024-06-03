import { useState } from 'react';
import { jobList, Job } from './jobData.js';

export default function ProfExp() {
  const [jobs, setJobs] = useState(jobList);
  const [showButton, setShowButton] = useState(false);
  return (
    <section className="prof-exp">
      <div
        className="section-header"
        onMouseOver={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <hr />
        <div className="section-title">
          <h2>Professional Experience</h2>
          <button
            onClick={() => {
              console.log(jobList);
              setJobs([...jobList, new Job('job Name', '', '', '')]);
            }}
            style={{ display: showButton === false ? 'none' : 'block' }}
          >
            +
          </button>
        </div>
        <hr />
      </div>
      <div className="item-list">
        {jobs.map((job) => (
          <Employment
            key={job.id}
            company={job.company}
            position={job.position}
            description={job.description}
            startDate={job.startDate}
            endDate={job.endDate}
          />
        ))}
      </div>
    </section>
  );
}

function Employment({ company, position, description, startDate, endDate }) {
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
          title={company}
          initState={company}
          inputVisible={editMode}
        />
        <button
          onClick={() => setEditMode(!editMode)}
          style={{ display: showButton === false ? 'none' : 'block' }}
        >
          {!editMode ? 'Edit' : 'Submit'}
        </button>
      </div>
      <InfoField
        title="Position"
        initState={position}
        inputVisible={editMode}
      />
      <InfoField
        title="Description"
        initState={description}
        inputVisible={editMode}
      />
      <InfoField
        title="Employment Date"
        initState={startDate}
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

function InfoField({ initState, inputVisible }) {
  const [input, setInput] = useState(initState);
  return (
    <div className="info-field">
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
