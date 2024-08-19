import React from 'react';
import { Row, Col } from 'antd';
import fing1 from '../assets/fig-01.webp';
import '../theme.css'; 

const Profile = ({ darkMode }) => {
  return (
    <div style={{ padding: '10%' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <img src={fing1} alt="fig-01" style={{ width: '90%', height: 'auto' }} />
        </Col>
        <Col xs={24} md={12}>
          <div style={{ marginTop: '10px' }}>
            <span
              className={darkMode ? 'dark-mode-text' : 'light-mode-text'}
              style={{ fontSize: '4vw', marginTop: '0px' }}
            >
              Bonjour, I'm
            </span>
            <br />
            <span
              className={darkMode ? 'dark-mode-text' : 'light-mode-text'}
              style={{ fontSize: '5vw', marginTop: '0px' }}
            >
              Deshan
            </span>
            <br />
            <span
              className={darkMode ? 'dark-mode-text' : 'light-mode-text'}
              style={{ fontSize: '6vw', marginTop: '0px' }}
            >
              Jayashanka
            </span>
            <br />
            <span
              className={darkMode ? 'dark-mode-text' : 'light-mode-text'}
              style={{ marginTop: '20px', fontSize: '1.0vw' }}
            >
              I'm a Software Engineering undergraduate, following a Bachelor of Science Honors in Information Technology in Software Engineering at SLTC. Also a young researcher with a major interest in embedded systems, Java-related technologies, machine learning, cloud computing, Cybersecurity, IoT, and computer vision. I prefer self-learning over any other learning method and am always eager to learn something new. I am a motivated team player and have skills in Python, C, Java and Java-related Frameworks. I'm eager to put my skills and talents to work in any area where they are needed.
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
