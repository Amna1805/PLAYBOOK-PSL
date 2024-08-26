import React, { useState } from 'react';
import styles from '../../css/myfile.module.css';
import { MDBContainer } from 'mdb-react-ui-kit';

const Header3Component = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className={`text-white py-3 ${styles.header} ${styles.mover} ${styles.down}`}>
      <MDBContainer>
        <nav className={`d-flex justify-content-between align-items-center navbar navbar-expand navbar-dark ${styles.navbar}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a 
                href="/" 
                className={`nav-link text-white ${styles.navLink} ${activeLink === 'home' ? styles.activeLink : ''}`}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/dash" 
                className={`nav-link text-white ${styles.navLink} ${activeLink === 'dashboard' ? styles.activeLink : ''}`}
                onClick={() => handleLinkClick('dashboard')}
              >
                DashBoard
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/matches" 
                className={`nav-link text-white ${styles.navLink} ${activeLink === 'matches' ? styles.activeLink : ''}`}
                onClick={() => handleLinkClick('matches')}
              >
                Matches
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/teams" 
                className={`nav-link text-white ${styles.navLink} ${activeLink === 'teams' ? styles.activeLink : ''}`}
                onClick={() => handleLinkClick('teams')}
              >
                Teams
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/predict" 
                className={`nav-link text-white ${styles.navLink} ${activeLink === 'predict' ? styles.activeLink : ''}`}
                onClick={() => handleLinkClick('predict')}
              >
                Predict
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li>
              <a 
                href="/predict" 
                className={`text-white ${styles.predictNow} ${styles.blinkpredict}`}
              >
                Predict Now
              </a>
            </li>
          </ul>
        </nav>
      </MDBContainer>
    </header>
  );
};

export default Header3Component;
