import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AsyncComponent from './containers/AsyncComponent'
import Navigation from './containers/Navigation/Navigation';
// import Pagination from './containers/Pagination/Pagination';

const StoryContainer = AsyncComponent(() => import("./containers/StoryContainer"));
// const Top = AsyncComponent(() => import("./containers/Top"));
// const News = AsyncComponent(() => import("./containers/News"));
// const Show = AsyncComponent(() => import("./containers/Show"));
// const Ask = AsyncComponent(() => import("./containers/Ask"));

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<div className="container">
					<Switch>
						<Route path="/top/:page?" component={StoryContainer} />
						<Route path="/news/:page?" component={StoryContainer} />
						<Route path="/show/:page?" component={StoryContainer} />
						<Route path="/ask/:page?" component={StoryContainer} />
						<Route path="*" render={()=> {
							return <h1>No existe</h1>
						}} />
					</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
