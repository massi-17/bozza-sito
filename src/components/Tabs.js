import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSass,
  faReact,
  faJs,
  faCss3,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons';
import Home from './Tabs/Home';
import Projects from './Tabs/Projects';
import Education from './Tabs/Education';
import Skills from './Tabs/Skills';
import Contact from './Tabs/Contact';

function Tabs({ activeTab, onTabChange }) {
  const handleTabClick = (tabIndex) => {
    onTabChange(tabIndex);
  };

  return (
    <main>
      <div className="tab-container">
        <div
          className={`tab ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          <FontAwesomeIcon icon={faReact} style={{ color: '#5CCFEE' }} />
          home.jsx
        </div>

        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          <FontAwesomeIcon icon={faJs} style={{ color: '#d0ce4e' }} />
          projects.js
        </div>

        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          <FontAwesomeIcon icon={faHtml5} style={{ color: '#E77E52' }} />
          education.html
        </div>

        <div
          className={`tab ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          <FontAwesomeIcon icon={faCss3} style={{ color: '#0077BC' }} />
          skills.css
        </div>

        <div
          className={`tab ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}
        >
          <FontAwesomeIcon icon={faSass} style={{ color: '#C36192' }} />
          contact.sass
        </div>
      </div>

      <div className="content-container">
        <div className={`content ${activeTab === 0 ? 'active' : ''}`}>
          <Home onTabChange={onTabChange} />
        </div>

        <div className={`content ${activeTab === 1 ? 'active' : ''}`}>
          <Projects />
        </div>

        <div className={`content ${activeTab === 2 ? 'active' : ''}`}>
          <Education />
        </div>

        <div className={`content ${activeTab === 3 ? 'active' : ''}`}>
          <Skills />
        </div>

        <div className={`content ${activeTab === 4 ? 'active' : ''}`}>
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default Tabs;
