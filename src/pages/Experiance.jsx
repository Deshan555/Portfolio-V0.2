import React, { useEffect, useState } from 'react';
import { Row, Steps } from 'antd';
import data from './Profile.json';
import '../theme.css';

const Experience = ({theme}) => {
  const [activeProjects, setActiveProjects] = useState([]);

  return (
    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: 30 }}>
      <Row gutter={[16, 16]}>
        <span style={{ fontSize: 45, marginTop: '0px', fontWeight: 'bold' }} className='font-header'>
          Experience
        </span>
      </Row>

      <Steps
       style={{ marginTop: 10 }}
        progressDot
        current={1}
        direction="vertical"
        items={data.experience.map((item, index) => ({
          title: <span style={{ marginTop: 5, fontSize: 16, fontWeight: 'bold', color: 'white' }} className={theme ? 'dark-mode-text font-light' : 'light-mode-text font-light'}>{item.company} ({item.year})</span>,
          description: <span style={{ fontSize: 13, color: 'white' }} className={theme ? 'dark-mode-text font-light' : 'light-mode-text font-light'}><b>{item.position}</b>: {item.description}</span>,
        }))}
      />
    </div>
  );
};

export default Experience;
