import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

// const isRouteActive = (match, location) => {
// 	const path = location.pathname.match(/\/([a-z]*)\/([0-9]*)/, 'g');
// 	if (typeof path[2] === 'number') {
// 		return true;
// 	}
// }

const Navigation = () => {
	return (
		<div className="navigation">
			<ul className="navigation-nav">
				<li>
					<NavLink to="/top/1" activeClassName="active">
						Top
					</NavLink>
				</li>
				<li>
					<NavLink to="/news/1" activeClassName="active">
						News
					</NavLink>
				</li>
				<li>
					<NavLink to="/show" activeClassName="active">
						Show
					</NavLink>
				</li>
				<li>
					<NavLink to="/ask" activeClassName="active">
						Ask
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
