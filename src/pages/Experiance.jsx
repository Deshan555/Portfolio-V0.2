import React, { useEffect, useState } from 'react';
import { Row, Steps } from 'antd';
import data from './Profile.json';
import '../theme.css';

const Experience = ({theme}) => {
  const [activeProjects, setActiveProjects] = useState([]);

//   useEffect(() => {
//     const activeProjectsFetch = async () => {
//       let projectsArray = data.map(project => project.name);
//       setActiveProjects(projectsArray);
//     };

//     activeProjectsFetch();
//   }, []);

  return (
    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: 30 }}>
      <Row gutter={[16, 16]} justify="end">
        <span style={{ fontSize: 45, marginTop: '0px', fontWeight: 'bold' }} className='font-header'>
          Experience
        </span>
      </Row>

      <Steps
        progressDot
        current={1}
        direction="vertical"
        items={data.experience.map((item, index) => ({
          title: <span style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }} className={theme ? 'dark-mode-text font-light' : 'light-mode-text font-light'}>{item.company} ({item.year})</span>,
          description: <span style={{ fontSize: 13, color: 'white' }} className={theme ? 'dark-mode-text font-light' : 'light-mode-text font-light'}><b>{item.position}</b>: {item.description}</span>,
        //   content: item.description,
        }))}
      />
    </div>
  );
};

export default Experience;
