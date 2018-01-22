import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DynamicImport extends Component {
	state = {
		component: null
	};

	async componentDidMount() {
		const { path } = this.props;
		const { default: Component } = await path().then((data) => {
			return data;
		});

		this.setState({ component: <Component {...this.props} /> });

		// const { default: Component } = await path;
		// this.setState({ component: <Component {...this.props} /> });
	}

	render() {
		const { component } = this.state;
		return <div>{component || <h1>Loading...</h1>}</div>;
	}
}

DynamicImport.propTypes = {
	path: PropTypes.func.isRequired
};

export const Top = () => (
	<DynamicImport path={() => import('../../containers/Top')} />
);
export const News = () => (
	<DynamicImport path={() => import('../../containers/News')} />
);
export const Show = () => (
	<DynamicImport path={() => import('../../containers/Show')} />
);
export const Ask = () => (
	<DynamicImport path={() => import('../../containers/Ask')} />
);

// export default DynamicImport;
