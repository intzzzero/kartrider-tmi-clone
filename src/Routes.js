import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/SignIn/SignIn';
import Main from './Pages/Main/Main';
import Rank from './Pages/Rank/Rank';
import RankDetail from './Pages/Rank/RankDetail/RankDetail';
import Cart from './Pages/Cart/Cart';
import Track from './Pages/Track/Track';

const Routes = memo(() => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/signin' component={Signin} />
				<Route exact path='/rank' component={Rank} />
				<Route exact path='/rank/:id' component={RankDetail} />
				<Route exact path='/cart' component={Cart} />
				<Route exact path='/track' component={Track} />
				<Redirect from='*' to='/' />
			</Switch>
		</Router>
	);
});

export default Routes;
