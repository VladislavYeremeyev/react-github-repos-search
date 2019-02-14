/* eslint-disable react/destructuring-assignment */
import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import classnames from 'classnames';
import RepoCard from '../../atoms/RepoCard';
import styles from './TopicPage.module.css';

const StyledLoading = styled.h3 `
    color: red;
    transform: translateX(-50%);
    margin-top: 40px;
    position: absolute;
    left: 50%;
`;

class TopicPage extends Component {
  // componentDidMount(){
  //   this.props.receiveTopics();
  //   console.log(this.props.data);
  // }

  // {location: {state: {topic}}} = props;

  // const {
  //   kek
  // } = this.state;

  state = {
    loading: false,
    reposData: [],
    topic: this.props.location.state.topic
  }

  componentDidMount() {
    this.fetchRepos();
  }

  fetchRepos = () => {
    this.setState({ loading: true });
    console.log(this.state.topic)
    axios
      .get(`https://api.github.com/search/repositories?q=topic:${this.state.topic}&sort=stars`,
        { headers: { Accept: 'application/vnd.github.mercy-preview+json' } })
      .then((response) => {
        console.log(response.data)
        const reposData = response.data.items;
        this.setState({ reposData, loading: false });
      })
  }

  render() {
    const {location: {state: {topic}}} = this.props;
    const { reposData, loading } = this.state;

    return (
      <div>
        { loading && <StyledLoading>Loading...</StyledLoading> }
        <div className={classnames(styles.container, { [styles.faded]: loading })}>
          <h1>Top repositories in {topic}:</h1>
          <ul>
            { reposData
                .filter((elem, i) => i < 10)
                .map(repo =>
                  <li key={repo.id}>
                    <a href={repo.html_url}>
                      <RepoCard 
                        owner={repo.owner.login}
                        name={repo.name} 
                        description={repo.description} 
                        stars={repo.stargazers_count} 
                      />
                    </a>
                  </li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default TopicPage;