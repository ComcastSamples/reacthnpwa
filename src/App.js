import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Top, News, Show, Ask } from './containers/Navigation/DynamicImport';
import Navigation from './containers/Navigation/Navigation';
import Pagination from './containers/Pagination/Pagination';
class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<Pagination />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Top} />
							<Route path="/top/:page" component={Top} />
							<Route path="/news/:page" component={News} />
							<Route path="/show/:page" component={Show} />
							<Route path="/ask/:page" component={Ask} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
