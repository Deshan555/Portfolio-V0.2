import React, { useState } from 'react';
import { Button, Menu, Row, Col, Switch } from 'antd';
import './theme.css';
import fing1 from '../src/assets/fig-01.webp';
import  TechnologyStack  from './pages/technologyStack';
import GitHubRepos from './pages/GitHubRepos';
import Profile from './pages/Profile';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const technologies = [
    { name: 'HTML5', src: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Html.svg' },
    { name: 'CSS3', src: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
    { name: 'JavaScript', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Vue.js', src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
    { name: 'Angular', src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' },
    { name: 'Bootstrap', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
    { name: 'Sass', src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg' },
    { name: 'Node.js', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Express.js', src: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'Django', src: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg' },
    { name: 'Ruby on Rails', src: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg' },
    { name: 'Laravel', src: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
    { name: 'Spring Boot', src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg' },
    { name: 'MySQL', src: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' },
    { name: 'PostgreSQL', src: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
    { name: 'MongoDB', src: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg' },
    { name: 'SQLite', src: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg' },
    { name: 'Firebase', src: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg' },
    { name: 'Docker', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.png' },
    { name: 'Kubernetes', src: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg' },
    { name: 'Git', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
    { name: 'GitHub', src: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
    { name: 'Jenkins', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg' },
    { name: 'Terraform', src: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg' },
    { name: 'React Native', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Flutter', src: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png' },
    { name: 'Swift', src: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg' },
    { name: 'Kotlin', src: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png' },
    { name: 'AWS', src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Google Cloud', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    { name: 'Microsoft Azure', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
  ];

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

      {/* <div style={{ padding: '100px' }}>
        <Row>
          <Col span={12}>
            <img src={fing1} alt="fig-01" style={{ width: 'auto', height: '40%' }} />
          </Col>
          <Col span={12}>
            <div style={{ marginTop: '10px' }}>
              <span className={darkMode ? 'dark-mode-text' : 'light-mode-text'} style={{ fontSize: '50px', marginTop: '0px' }}>Bonjour, I'm</span><br></br>
              <span className={darkMode ? 'dark-mode-text' : 'light-mode-text'} style={{ fontSize: '60px', marginTop: '0px' }}>Deshan</span><br></br>
              <span className={darkMode ? 'dark-mode-text' : 'light-mode-text'} style={{ fontSize: '70px', marginTop: '0px' }}>Jayashanka</span><br></br>
              <span className={darkMode ? 'dark-mode-text' : 'light-mode-text'} style={{ marginTop: '20px' }}>
                I'm Software Engineering undergraduate, following a Bachelor of Science Honors in Information Technology in Software Engineering at SLTC. Also a young researcher with a major interest in ,embedded systems, java related technologies, machine learning, cloud computing, Cybersecurity, IoT, and computer vision.
                I prefer self-learning over any other learning method and am always eager to learn something new. I am a motivated team player and have skills in: Python, C, Java and Java related Frameworks. I'm eager to put my skills and talents to work in any area where they are needed.
              </span>
            </div>
          </Col>
        </Row>
      </div> */}

<Profile />


      <TechnologyStack />

      <GitHubRepos username="deshan555" theme={darkMode}/>


      

      <Button onClick={toggleTheme}>Toggle Theme</Button>
      {/* Your app content goes here */}
    </div>
  );
};

export default App;
