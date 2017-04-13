import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// Layouts
import MainLayout from './components/main-layout';

// Pages
import Home     from './components/pages/home';
import About    from './components/pages/about';
import Works    from './components/pages/works';
import Services from './components/pages/services';

export default (
  <Router history={browserHistory}>
     <Route path="/" component={MainLayout}>
        <IndexRoute component={Home}/>
        <Route path="/about"  component={About} />
        <Route path="/works"  component={Works} />
        <Route path="/services" component={Services} />
     </Route>
  </Router>
)