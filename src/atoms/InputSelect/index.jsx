import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import styles from './InputSelect.module.css';
  
class InputSelect extends React.Component {
  state = {
    availableOptions: [],
    selectedOption: null,
  };

  fetchTopics = (inputValue) => {
    return axios
      .get(`https://api.github.com/search/topics?q=${inputValue}+is:featured`,
        {headers: {Accept: 'application/vnd.github.mercy-preview+json'}})
      .then(response => {
        return response.data.items.map(elem => {return { value: elem.name, label: elem.name }})
      })
      .catch((error) => {
          console.log(error);
      });
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    const { history } = this.props;
    history.push({ pathname: `/${selectedOption.value}`, state: { topic: selectedOption.value }});
  }
  
  render() {
    const { 
      selectedOption,
      availableOptions
     } = this.state;

    return (
      <AsyncSelect 
        className={styles.InputSelect}
        cacheOptions 
        defaultOptions 
        loadOptions={ this.fetchTopics } 
        onChange={this.handleChange}
      />
    );
  }
}

export default withRouter(InputSelect);
