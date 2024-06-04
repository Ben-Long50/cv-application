import { useState } from 'react';
import { jobList, Job, JobDesc } from './jobData.js';
import Icon from '@mdi/react';
import {
  mdiTextBoxEdit,
  mdiCheckBold,
  mdiPlusThick,
  mdiMinusThick,
} from '@mdi/js';

export default function ProfExp() {
  const [jobs, setJobs] = useState(jobList);
  const [showButton, setShowButton] = useState(false);
  return (
    <section className="flex-column-gap-1 prof-exp">
      <div
        className="section-header"
        onMouseOver={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <hr />
        <div className="section-title">
          <h2 className="section-header">Professional Experience</h2>
          <div className="button-container">
            <button
              className="desc-remove-but"
              onClick={() => {
                const newList = jobs.slice(0, -1);
                setJobs(newList);
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
                setJobs([
                  ...jobs,
                  new Job(
                    'Job Name',
                    'Position',
                    [''],
                    'Employment Start Date',
                    'Employment End Date',
                  ),
                ]);
              }}
              style={{
                visibility: showButton === false ? 'hidden' : 'visible',
              }}
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
      <div>
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
    <div
      className="flex-column-gap-2"
      onMouseOver={() => setShowButton(true)}
      onMouseLeave={() => (editMode ? null : setShowButton(false))}
    >
      <div className="section-title">
        <HeaderField
          title={company}
          initState={company}
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
      <InfoField
        title="Date"
        initState={startDate + ' to ' + endDate}
        inputVisible={editMode}
      />
      <InfoField
        title="Position"
        initState={position}
        inputVisible={editMode}
      />
      <DescList
        initState={description}
        inputVisible={editMode}
        showButton={showButton}
      />
    </div>
  );
}

function HeaderField({ initState, inputVisible }) {
  const [input, setInput] = useState(initState);
  return (
    <div className="info-field">
      <h2
        className="section-name"
        style={{ display: inputVisible ? 'none' : 'block' }}
      >
        {input}
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

function DescList({ initState, inputVisible, showButton }) {
  const [descList, setDescList] = useState(initState);

  const addItem = () => {
    const newItem = new JobDesc(descList, 'Job Description');
    setDescList([...descList, newItem]);
  };

  const removeItem = () => {
    const newList = descList.slice(0, -1);
    setDescList(newList);
  };

  const handleInputChange = (id, value) => {
    const updatedDescList = descList.map((item) =>
      id === item.id ? { ...item, description: value } : item,
    );
    setDescList(updatedDescList);
  };

  return (
    <>
      <ul className="flex-column-gap-2">
        {descList.map((item) => (
          <li key={item.id}>
            <span style={{ display: inputVisible ? 'none' : 'inline' }}>
              {item.description}
            </span>
            <input
              type="text"
              value={item.description}
              onChange={(e) => handleInputChange(item.id, e.target.value)}
              style={{ display: inputVisible ? 'inline' : 'none' }}
            />
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button
          className="desc-remove-but"
          onClick={removeItem}
          style={{ visibility: showButton === false ? 'hidden' : 'visible' }}
        >
          <Icon className="interactive-icon" path={mdiMinusThick} size={1.25} />
        </button>
        <button
          className="desc-add-but"
          onClick={addItem}
          style={{ visibility: showButton === false ? 'hidden' : 'visible' }}
        >
          <Icon className="interactive-icon" path={mdiPlusThick} size={1.25} />
        </button>
      </div>
    </>
  );
}
