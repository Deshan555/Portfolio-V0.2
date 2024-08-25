import React from 'react';
import { Row, Col } from 'antd';
import LazyLoad from 'react-lazyload';
import '../styles/base.css';

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

const TechnologyStack = () => (
  <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: 30 }}>
          <Row gutter={[16, 16]} justify="end">
        <span style={{ fontSize: 60, marginTop: '0px', fontWeight: 'bold'}} className='font-header'>Technology Stack</span>
      </Row>
    <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
      {technologies.map((tech) => (
        <Col key={tech.name} xs={12} sm={8} md={6} lg={4} xl={3}>
          <LazyLoad height={100} offset={100}>
            <div className="tech-item">
              <img src={tech.src} alt={tech.name} className="tech-image" width={20} height={20} />
              <div>{tech.name}</div>
            </div>
          </LazyLoad>
        </Col>
      ))}
    </Row>
  </div>
);

export default TechnologyStack;
