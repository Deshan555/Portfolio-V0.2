import React, { useEffect, useState } from 'react';
import { Card, Avatar, Skeleton, Row, Col } from 'antd';
import { StarOutlined, ForkOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Meta } = Card;

const GitHubRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

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
              <Card style={{ width: 300, margin: '20px auto' }}>
                <Meta
                  avatar={<Avatar src={repo.owner.avatar_url} />}
                  title={repo.name}
                  description={repo.description}
                />
                <div style={{ marginTop: 16 }}>
                  <p><b>Created at:</b> {new Date(repo.created_at).toLocaleDateString()}</p>
                  <p><StarOutlined /> Stars: {repo.stargazers_count}</p>
                  <p><ForkOutlined /> Forks: {repo.forks_count}</p>
                  <p><b>Language:</b> {repo.language}</p>
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
