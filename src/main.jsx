import React from 'react';
import ReactDOM from 'react-dom/client';
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/Education';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralInfo />
    <hr />
    <EducationInfo />
    <hr />
  </React.StrictMode>,
);
