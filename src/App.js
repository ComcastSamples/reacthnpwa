import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AsyncComponent from './containers/AsyncComponent'
import Navigation from './containers/Navigation/Navigation';

const StoryContainer = AsyncComponent(() => import("./containers/StoryContainer"));

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<div className="container">
					<Switch>
						<Route path="/top/:page?" component={StoryContainer} />
						<Route path="/new/:page?" component={StoryContainer} />
						<Route path="/show/:page?" component={StoryContainer} />
						<Route path="/ask/:page?" component={StoryContainer} />
						<Route path="/jobs/:page?" component={StoryContainer} />
						<Route path="*" render={()=> {
							return <h1>Page don't exist</h1>
						}} />
					</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
