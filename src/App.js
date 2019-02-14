import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import TopicPage from './pages/TopicPage';

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/:id" component={TopicPage} exact />
      </Switch>
    </BrowserRouter>
);

export default App;
