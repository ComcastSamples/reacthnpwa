import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DynamicImport extends Component {
	state = {
		component: null,
		page: 1
	};

	async componentDidMount() {
		const { path } = this.props;
		const { default: Component } = await path().then((data) => {
			return data;
		}, this.props);

		this.setState({ component: <Component {...this.props} /> });
	}

	render() {
		const { component: Component } = this.state;
		return <div>{Component}</div>;
	}
}

DynamicImport.propTypes = {
	path: PropTypes.func.isRequired
};
