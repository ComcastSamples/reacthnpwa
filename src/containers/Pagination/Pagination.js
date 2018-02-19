import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';

const Pagination = (props) => {
	const { story, page, pages } = props

	let currentPage = parseInt(page, 10);

	return (
		<div className="Pagination">
			<Link to={`/${story}/${currentPage !== 1 ? currentPage - 1 : currentPage}`}>
				&lt; prev
			</Link>
			<span>{`${currentPage}/${pages}`}</span>
			<Link to={`/${story}/${currentPage !== pages ? currentPage + 1 : currentPage}`}>
				next &gt;
			</Link>
		</div>
	)
}

export default Pagination;
