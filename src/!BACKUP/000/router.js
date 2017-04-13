import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './styles/App.css';

// Layouts
import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';

// Pages
import Home from './components/home';
import About from './components/about';
import WorkList from './components/work-list';
import WorkPage from './components/work-page';
import Skills from './components/skills';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      
      <Route path="works">
        <Route component={SearchLayout}>
          <IndexRoute component={WorkList} />
        </Route>
        <Route path=":workId" component={WorkPage} />
      </Route>
    </Route>
  </Router>
);
