import React, { useState } from 'react';
import { Button, Menu, Switch } from 'antd';
import './theme.css';
import TechnologyStack from './pages/technologyStack';
import GitHubRepos from './pages/GitHubRepos';
import Profile from './pages/Profile';
import Experience from './pages/Experiance';
import User from './pages/User';
import { CodeOutlined } from '@ant-design/icons';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'} style={{ height: '100%' }}>
      <div className="header" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', alignItems: 'center' }}>
        <h4 className={darkMode ? 'dark-mode-text' : 'light-mode-text'}><CodeOutlined /> Deshan Jayashanka</h4>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ background: 'transparent' }}>
          <Menu.Item key="2">
            <span className={darkMode ? 'dark-mode-text' : 'light-mode-text'} style={{ color: 'white' }}>
            Projects</span></Menu.Item>
          <Menu.Item key="3">Resume</Menu.Item>
          {/* <Menu.Item key="4">
            <Switch checked={darkMode} onChange={toggleTheme} size='small' />
          </Menu.Item> */}
        </Menu>
      </div>
      {/* PROFILE SECTION */}
      <User darkMode={darkMode} />
      {/* EXPERIENCE SECTION */}
      <Experience theme={darkMode} />
      {/* TECHNOLOGY STACKS SECTION */}
      <TechnologyStack theme={darkMode} />
      {/* PROJECTS SECTION */}
      <GitHubRepos username="deshan555" theme={darkMode}/>

      <Button onClick={scrollToTop}>Scroll to Top</Button>

    </div>
  );
};

export default App;
