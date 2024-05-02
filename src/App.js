import React, { useState } from 'react';
import { Button, Menu, Row, Col, Switch } from 'antd';
import './theme.css'; // Import your custom theme file
import fing1 from '../src/assets/fig-01.webp';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'} style={{ height: '100%' }}>

      <div className="header" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', alignItems: 'center' }}>
        <h4 className={darkMode ? 'dark-mode-text' : 'light-mode-text'}>Deshan Jayashanka</h4>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ background: 'transparent' }}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
          <Menu.Item key="4">
            <Switch checked={darkMode} onChange={toggleTheme} size='small' />
          </Menu.Item>
        </Menu>
        
      </div>

      <div style={{padding: '100px'}}>

      <Row>
        <Col span={12}>
          <img src={fing1} alt="fig-01" style={{ width: 'auto', height: '40%' }} />
        </Col>
        <Col span={12}>
            {/* <h1 className={darkMode ? 'dark-mode-text' : 'light-mode-text'} style={{ marginTop: '0px' }}>Hello World!</h1>
            <h1 className={darkMode ? 'dark-mode-text' : 'light-mode-text'} style={{ fontSize: '50px', marginTop: '0px' }}>
              I am
            </h1>
            <h1 className={darkMode ? 'dark-mode-text' : 'light-mode-text'} style={{ fontSize: '60px', marginTop: '0px' }}>
              Deshan
            </h1>
            <h1 className={darkMode ? 'dark-mode-text' : 'light-mode-text'} style={{ fontSize: '70px', marginTop: '0px' }}>
              Jayashanka
            </h1> */}
            <div style={{ marginTop: '10px' }}>
              {/* <span className={darkMode ? 'dark-mode-text' : 'light-mode-text'} style={{ fontSize: '20px', marginTop: '0px' }}>Bonjour</span><br></br> */}
              <span className={darkMode ? 'dark-mode-text' : 'light-mode-text'}  style={{ fontSize: '50px', marginTop: '0px' }}>Bonjour, I'm</span><br></br>
              <span className={darkMode ? 'dark-mode-text' : 'light-mode-text'} style={{ fontSize: '60px', marginTop: '0px' }}>Deshan</span><br></br>
              <span className={darkMode ? 'dark-mode-text' : 'light-mode-text'} style={{ fontSize: '70px', marginTop: '0px' }}>Jayashanka</span><br></br>
              <span className={darkMode ? 'dark-mode-text' : 'light-mode-text'}>
            I'm Software Engineering undergraduate, following a Bachelor of Science Honors in Information Technology in Software Engineering at SLTC. Also a young researcher with a major interest in ,embedded systems, java related technologies, machine learning, cloud computing, Cybersecurity, IoT, and computer vision.
            I prefer self-learning over any other learning method and am always eager to learn something new. I am a motivated team player and have skills in: Python, C, Java and Java related Frameworks. I'm eager to put my skills and talents to work in any area where they are needed.
          </span>
              {/* <span className={darkMode ? 'dark-mode-text' : 'light-mode-text'} style={{ fontSize: '20px', marginTop: '0px' }}>Software Engineering undergraduate</span> */}

            </div>
          {/* <h2 className={darkMode ? 'dark-mode-text' : 'light-mode-text'}>Software Engineering undergraduate</h2> */}
          {/* <span className={darkMode ? 'dark-mode-text' : 'light-mode-text'}>
            I'm Software Engineering undergraduate, following a Bachelor of Science Honors in Information Technology in Software Engineering at SLTC. Also a young researcher with a major interest in ,embedded systems, java related technologies, machine learning, cloud computing, Cybersecurity, IoT, and computer vision.
            I prefer self-learning over any other learning method and am always eager to learn something new. I am a motivated team player and have skills in: Python, C, Java and Java related Frameworks. I'm eager to put my skills and talents to work in any area where they are needed.
          </span> */}
        </Col>
      </Row>

      <span className={darkMode ? 'dark-mode-text' : 'light-mode-text'}>
            I'm Software Engineering undergraduate, following a Bachelor of Science Honors in Information Technology in Software Engineering at SLTC. Also a young researcher with a major interest in ,embedded systems, java related technologies, machine learning, cloud computing, Cybersecurity, IoT, and computer vision.
            I prefer self-learning over any other learning method and am always eager to learn something new. I am a motivated team player and have skills in: Python, C, Java and Java related Frameworks. I'm eager to put my skills and talents to work in any area where they are needed.
          </span>

      </div>
      
      
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      {/* Your app content goes here */}
    </div>
  );
};

export default App;
