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

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
	}

	render() {
		const { component: Component } = this.state;
		return <div>{Component}</div>;
	}
}

DynamicImport.propTypes = {
	path: PropTypes.func.isRequired
};

export const Top = (props) => {
	return (
		<DynamicImport path={() => import('../../containers/Top')} {...props} />
	);
};
export const News = (props) => {
	return (
		<DynamicImport path={() => import('../../containers/News')} {...props} />
	);
};
export const Show = (props) => {
	return (
		<DynamicImport path={() => import('../../containers/Show')} {...props} />
	);
};
export const Ask = (props) => {
	return (
		<DynamicImport path={() => import('../../containers/Ask')} {...props} />
	);
};
