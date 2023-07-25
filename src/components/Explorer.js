import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSass,
    faReact,
    faJs,
    faCss3,
    faHtml5,
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faEllipsis,
    faAngleDown,
    faAngleRight,
  } from '@fortawesome/free-solid-svg-icons';

function Explorer({ onTabChange, activeTab }) {
  function handleTabClick(tabIndex) {
    onTabChange(tabIndex);
  }

  const [portfolioFolderIsActive, setPortfolioFolderIsActive] = useState(true);

  function handlePortfolioFolder() {
    setPortfolioFolderIsActive((prevValue) => !prevValue);
  }

  return (
    <div className="explorer">
      <h1>
        explorer <FontAwesomeIcon icon={faEllipsis} className="ellipsis" />
      </h1>
      <h2 onClick={handlePortfolioFolder}>
        {portfolioFolderIsActive ? (
          <FontAwesomeIcon icon={faAngleDown} />
        ) : (
          <FontAwesomeIcon icon={faAngleRight} />
        )}{' '}
        <span>portfolio</span>
      </h2>
      <div
        className="container-files"
        style={{ visibility: portfolioFolderIsActive ? 'visible' : 'hidden' }}
      >
        <div
          className={`explorer-files ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          <FontAwesomeIcon icon={faReact} style={{ color: '#5CCFEE' }} />
          home.jsx
        </div>

        <div
          className={`explorer-files ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          <FontAwesomeIcon icon={faJs} style={{ color: '#d0ce4e' }} />
          projects.js
        </div>
        <div
          className={`explorer-files ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          <FontAwesomeIcon icon={faHtml5} style={{ color: '#E77E52' }} />
          education.html
        </div>
        <div
          className={`explorer-files ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          <FontAwesomeIcon icon={faCss3} style={{ color: '#0077BC' }} />
          skills.css
        </div>
        <div
          className={`explorer-files ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}
        >
          <FontAwesomeIcon icon={faSass} style={{ color: '#C36192' }} />
          contact.sass
        </div>
      </div>
    </div>
  );
}

export default Explorer;
