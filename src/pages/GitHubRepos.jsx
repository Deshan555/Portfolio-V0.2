import React, { useEffect, useState } from 'react';
import { Card, Avatar, Skeleton, Row, Col } from 'antd';
import { StarOutlined, ForkOutlined, CodeOutlined } from '@ant-design/icons';
import axios from 'axios';
import '../theme.css';
import data from './projects.json';

const { Meta } = Card;

const GitHubRepos = ({ username, theme }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeProjects, setActiveProjects] = useState([]);

  const activeProjectsFetch = async () => {
    let projectsArray = [];
    data.forEach((project) => {
      projectsArray.push(project.name);
    });
    setActiveProjects(projectsArray);
    return true;
  };

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        let page = 1;
        let allRepos = [];
        let fetchedRepos;

        do {
          const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
            params: { page, per_page: 100 },
          });
          fetchedRepos = response.data;
          allRepos = [...allRepos, ...fetchedRepos];
          page++;
        } while (fetchedRepos.length > 0);
        setRepos(filterProjects(allRepos));
        localStorage.setItem('projects', JSON.stringify(allRepos));
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };
    if (localStorage.getItem('projects') !== null) {
      setRepos(filterProjects(JSON.parse(localStorage.getItem('projects'))));
      setLoading(false);
    } else {
      fetchRepos();
    }
  }, [username, theme]);

  const filterProjects = async (allProjects) => {
    const response = await activeProjectsFetch();
    console.log(response);
    if (!response) {
      return [];
    } else {
      const filteredProjects = allProjects.map(project => {
        if (activeProjects.includes(project.name)) {
          return {
            name: project.name,
            fullname: project.fullName,
            id: project.id,
            url: project.url,
            avatar_url: project.owner ? project.owner.avatar_url : null,
            stargazers_count: project.stargazers_count,
            forks_count: project.forks_count,
            language: project.language,
            description: project.description,
          };
        }
        return null;
      }).filter(project => project !== null);
      return filteredProjects;
    }
  };

//  const isProjectActive = (fullName) => {
//   console.log(fullName);
//    data.map((project) => {
//     console.log(project.name);                                                                                  
//       if (project.name === fullName) {
//         return true;
//       }
//     return false;
//     });
//  }



  const wordConversation = (word) => {
    return word.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
      return str.toUpperCase();
    });
  }

  return (
    <div style={{ padding: '20px' }}>
      <pre>
        {JSON.stringify(activeProjects, null, 2)}
      </pre>
      <Row gutter={[16, 16]}>
        {loading ? (
          Array.from({ length: 12 }).map((_, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card style={{ width: 300, margin: '20px auto' }}>
                <Skeleton loading={loading} avatar active />
              </Card>
            </Col>
          ))
        ) : (
          repos?.map((repo) => (
            <Col key={repo.id} xs={24} sm={12} md={8} lg={6}>
              <Card style={{ width: 320, margin: '20px auto', height: '200px', backgroundColor: theme ? '#333' : '#fff' }} hoverable>
                <Meta
                  avatar={<Avatar src='https://avatars.githubusercontent.com/u/74134064?v=4' />}
                  title={<span className='font-light' style={{ color: theme ? '#fff' : '#000', fontSize: '14px' }}>{wordConversation(repo.name)}</span>}
                  className={theme ? 'dark-mode-text' : 'light-mode-text'}
                  style={{ height: '130px' }}
                  description={<span className={'font-light'}
                    style={{ color: theme ? '#fff' : '#000', fontSize: '12px' }}
                  >{repo.description}<a href={repo.html_url} target="_blank" rel="noreferrer"> GitHub</a></span>}
                />
                <div style={{ marginTop: '10px', height: '30px' }}>
                  <Row>
                    <Col span={8}>
                      <span className={'font-light'}
                        style={{ color: theme ? '#fff' : '#000', fontSize: '12px' }}><StarOutlined /> Stars: {repo.stargazers_count}</span>
                    </Col>
                    <Col span={8}>
                      <span className={'font-light'}
                        style={{ color: theme ? '#fff' : '#000', fontSize: '12px' }}><ForkOutlined /> Forks: {repo.forks_count}</span>
                    </Col>
                    <Col span={8}>
                      <span className={'font-light'}
                        style={{ color: theme ? '#fff' : '#000', fontSize: '12px' }}><CodeOutlined /> {repo.language}</span>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default GitHubRepos;
