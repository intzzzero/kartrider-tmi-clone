import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Rank from './Pages/Rank/Rank';

const Routes = memo(() => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route exact path='/rank' component={Rank} />
				<Redirect from='*' to='/' />
			</Switch>
		</Router>
	);
});

export default Routes;
