import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';

class Pagination extends Component {
	state = {
		currentPage: 1
	};
	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
	}

	render() {
		const { currentPage } = this.state;
		return (
			<div className="Pagination">
				<Link to={`/top/${currentPage !== 1 ? currentPage - 1 : currentPage}`}>
					&lt; prev
				</Link>
				<span>{`${currentPage}/${currentPage}`}</span>
				<Link to={`/top/${currentPage + 1}`}>next &gt;</Link>
			</div>
		);
	}
}

export default Pagination;
