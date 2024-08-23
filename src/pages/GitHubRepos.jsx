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
    let projectsArray = data.map(project => project.name);
    setActiveProjects(projectsArray);
    return true;
  };

  const filterProjects = async (allProjects) => {
    const response = await activeProjectsFetch();
    if (!response) {
      return [];  // Ensure it returns an array
    } else {
      const filteredProjects = allProjects.map(project => {
        if (activeProjects.includes(project.name)) {
          return {
            name: project.name,
            fullname: project.full_name,
            id: project.id,
            html_url: project.html_url,
            avatar_url: project.owner ? project.owner.avatar_url : null,
            stargazers_count: project.stargazers_count,
            forks_count: project.forks_count,
            language: project.language,
            description: project.description,
          };
        }
        return null;
      }).filter(project => project !== null);

      return filteredProjects;  // Ensure it returns an array
    }
  };

  useEffect(() => {
    const cachedProjects = localStorage.getItem('projects');
    if (cachedProjects) {
      filterProjects(JSON.parse(cachedProjects)).then(filteredRepos => {
        setRepos(filteredRepos);  // Set the filtered repos
        setLoading(false);
      });
    } else {
      fetchRepos();
    }
  }, [username, theme]);

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

      const filteredRepos = await filterProjects(allRepos);  // Wait for filtering to complete
      setRepos(filteredRepos);  // Ensure repos is an array
      localStorage.setItem('projects', JSON.stringify(allRepos));
    } catch (error) {
      console.error("Error fetching repos:", error);
    } finally {
      setLoading(false);
    }
  };

  const wordConversation = (word) => {
    return word.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
      return str.toUpperCase();
    });
  };

  return (
    <div style={{ padding: '20px' }}>
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
                  avatar={<Avatar src={repo.avatar_url} />}
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
