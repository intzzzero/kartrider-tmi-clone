import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './Pages/Main/Main';

const Routes = memo(() => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  );
});

export default Routes;
