import React, { Component } from 'react';
// import { getStoryType, getItem } from '../services/Services';
// import Promise from 'promise';

class Top extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stories: []
		};
	}

	componentDidMount() {
		// console.log(this.props);
		// getStoryType('top').then((data) => {
		// 	this.setState({ stories: data.val() });
		// });
	}

	render() {
		// console.log(this.props);
		// const { match } = this.props;
		// console.log(match);
		// const { stories } = this.state;
		// let storyList = [];
		// stories.map((item) => {
		// 	return storyList.push(getItem(item));
		// });
		// Promise.all(storyList).then((data) => {
		// 	console.log(data);
		// });
		return (
			<div>
				<h2>Top</h2>
			</div>
		);
	}
}

export default Top;
