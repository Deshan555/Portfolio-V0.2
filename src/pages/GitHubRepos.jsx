import React, { useEffect, useState } from 'react';
import { Card, Avatar, Skeleton, Row, Col } from 'antd';
import { StarOutlined, ForkOutlined, CodeOutlined } from '@ant-design/icons';
import axios from 'axios';
import '../theme.css';

const { Meta } = Card;

const GitHubRepos = ({ username, theme }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // DO FRONTEND CHACHING HERE
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
        setRepos(allRepos);
        localStorage.setItem('projects', JSON.stringify(allRepos));
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    // check local storage status
    if (localStorage.getItem('projects') !== null) {
      setRepos(JSON.parse(localStorage.getItem('projects')));
      setLoading(false);
    } else {
      fetchRepos();
    }
  }, [username, theme]);

  const wordConversation = (word) => {
    return word.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
      return str.toUpperCase();
    });
  }

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
          repos.map((repo) => (
            <Col key={repo.id} xs={24} sm={12} md={8} lg={6}>
              <Card style={{ width: 320, margin: '20px auto', height: '200px', backgroundColor: theme ? '#333' : '#fff' }}hoverable>

  <Meta
    avatar={<Avatar src={repo.owner.avatar_url} />}
    title={<span className='font-light' style={{color: theme ? '#fff' : '#000', fontSize: '14px'}}>{wordConversation(repo.name)}</span>}
    className={theme ? 'dark-mode-text' : 'light-mode-text'}
    style={{ height: '130px' }}
    description={<span className={'font-light'}
    style={{color: theme ? '#fff' : '#000', fontSize: '12px'}}
    >{repo.description}<a href={repo.html_url} target="_blank" rel="noreferrer">GitHub</a></span>}
  />


                <div style={{ marginTop: '10px', height: '30px' }}>
                  {/* <Row>
                    <Col span={12}>
                      <a href={repo.html_url} target="_blank" rel="noreferrer">GitHub</a>
                    </Col>
                    <Col span={12}>
                      <a href={repo.html_url + '/archive/refs/heads/main.zip'}>Download</a>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col span={8}>
                      <span className={'font-light'}
    style={{color: theme ? '#fff' : '#000', fontSize: '12px'}}><StarOutlined /> Stars: {repo.stargazers_count}</span>
                    </Col>
                    <Col span={8}>
                      <span className={'font-light'}
    style={{color: theme ? '#fff' : '#000', fontSize: '12px'}}><ForkOutlined /> Forks: {repo.forks_count}</span>
                    </Col>
                    <Col span={8}>
                      <span className={'font-light'}
    style={{color: theme ? '#fff' : '#000', fontSize: '12px'}}><CodeOutlined />{repo.language}</span>
                    </Col>
                  </Row>
                  {/* <p><b>Created at:</b> {new Date(repo.created_at).toLocaleDateString()}</p>
                  <p><StarOutlined /> Stars: {repo.stargazers_count}</p>
                  <p><ForkOutlined /> Forks: {repo.forks_count}</p>
                  <p><b>Language:</b> {repo.language}</p>
                  {repo.homepage && <a href={repo.homepage} target="_blank" rel="noreferrer">Live Demo</a>} */}
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
