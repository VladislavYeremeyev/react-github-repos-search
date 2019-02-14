import React from 'react';
import InputSelect from '../../atoms/InputSelect';
import MainTemplate from '../../templates/Main';

const HomePage = () => {
    return (
      <MainTemplate>
        <h1>Type topic name below:</h1>
        <InputSelect/>
      </MainTemplate>
    );
}

export default HomePage;
