import React from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import fing1 from '../assets/fig-01.webp';
import '../theme.css';

const Profile = ({ darkMode }) => {
  return (
    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: 35 }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <motion.img
            src={fing1}
            alt="fig-01"
            style={{ width: '90%', height: 'auto' }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </Col>
        <Col xs={24} md={12}>
          <div style={{ marginTop: '10px' }}>
            <motion.span
              className={darkMode ? 'dark-mode-text' : 'light-mode-text'}
              style={{ fontSize: '4vw', marginTop: '0px' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bonjour, I'm
            </motion.span>
            <br />
            <motion.span
              className={darkMode ? 'dark-mode-text' : 'light-mode-text'}
              style={{ fontSize: '5vw', marginTop: '0px' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Deshan
            </motion.span>
            <br />
            <motion.span
              className={darkMode ? 'dark-mode-text' : 'light-mode-text'}
              style={{ fontSize: '6vw', marginTop: '0px' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Jayashanka
            </motion.span>
            <br />
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="end">
        <span style={{ fontSize: 60, marginTop: '0px', fontWeight: 'bold'}} className='font-header'>Who am I?</span>
      </Row>
      <motion.span
        className={darkMode ? 'dark-mode-text font-light' : 'light-mode-text font-light'}
        style={{ marginTop: '100px', fontSize: '0.8vw', textWrap: 'wrap', lineHeight: '1.5', }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      ><div className='div'>
          I'm a Software Engineering undergraduate, following a Bachelor of Science Honors in Information Technology in Software Engineering at SLTC. Also a young researcher with a major interest in embedded systems, Java-related technologies, machine learning, cloud computing, Cybersecurity, IoT, and computer vision. I prefer self-learning over any other learning method and am always eager to learn something new. I am a motivated team player and have skills in Python, C, Java and Java-related Frameworks. I'm eager to put my skills and talents to work in any area where they are needed.
        </div>
      </motion.span>
      <span>
      </span>
    </div>
  );
};

export default Profile;
