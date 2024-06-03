import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import EducationInfo from './components/Education';
import ProfExp from './components/ProfExp';
import './styles/main.css';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Layout></Layout>
  </React.StrictMode>,
);

function Layout() {
  return (
    <main className="main-layout">
      <Header />
      <ContactInfo />
      <hr className="divider" />
      <ProfExp />
      <EducationInfo />
    </main>
  );
}
