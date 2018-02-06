import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => {
	return (
		<div className="navigation">
			<ul className="navigation-nav">
				<li>
					<NavLink to="/top/1" activeClassName="active" isActive={(match,location) => /top/.test(location.pathname)}>
						Top
					</NavLink>
				</li>
				<li>
					<NavLink to="/news/1" activeClassName="active"isActive={(match,location) => /news/.test(location.pathname)}>
						News
					</NavLink>
				</li>
				<li>
					<NavLink to="/show/1" activeClassName="active" isActive={(match,location) => /show/.test(location.pathname)}>
						Show
					</NavLink>
				</li>
				<li>
					<NavLink to="/ask/1" activeClassName="active" isActive={(match,location) => /ask/.test(location.pathname)}>
						Ask
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
