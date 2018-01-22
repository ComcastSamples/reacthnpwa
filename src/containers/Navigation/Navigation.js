import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
	<div className="navigation">
		<ul className="navigation-nav">
			<li>
				<NavLink exact to="/" activeClassName="active">
					Top
				</NavLink>
			</li>
			<li>
				<NavLink to="/news" activeClassName="active">
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

export default Navigation;
