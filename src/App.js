import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AsyncComponent from './containers/AsyncComponent'
import Navigation from './containers/Navigation/Navigation';
import Pagination from './containers/Pagination/Pagination';

const Top = AsyncComponent(() => import("./containers/Top"));
const News = AsyncComponent(() => import("./containers/News"));
const Show = AsyncComponent(() => import("./containers/Show"));
const Ask = AsyncComponent(() => import("./containers/Ask"));


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<Pagination />
					<div className="container">
					<Switch>
						<Route exact path="/top/:page" component={Top} />
						<Route exact path="/news/:page" component={News} />
						<Route exact path="/show/:page" component={Show} />
						<Route exact path="/ask/:page" component={Ask} />
						<Redirect to="/"/>
					</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
