import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import routes from './constants/Routes';
import Navigation from './containers/Navigation/Navigation';
import { Top, News, Show, Ask } from './containers/Navigation/DynamicImport';
import { getStoryType } from './services/Services';

// class DynamicImport extends Component {
// 	state = {
// 		component: null
// 	};

// 	async componentDidMount() {
// 		const { path } = this.props;
// 		const { default: Component } = await import(`${path}`);
// 		this.setState({ component: <Component {...this.props} /> });
// 	}

// 	render() {
// 		const { component } = this.state;
// 		return <div>{component || <h1>Loading...</h1>}</div>;
// 	}
// }

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<div className="container">
						<Route exact path="/" component={Top} />
						<Route path="/news" component={News} />
						<Route path="/show" component={Show} />
						<Route path="/ask" component={Ask} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
