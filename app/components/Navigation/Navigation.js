import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import RouteShape from '../../prop-types/Route';

const generateNavLinks = routes =>
	routes.map(route => [
		<li key={route.href}>
			<Link href={route.href}>
				<a>{route.label}</a>
			</Link>
		</li>
	]);

export const Navigation = ({ routes, className }) => (
	<nav className={className}>
		<If condition={routes.length}>
			<ul>{generateNavLinks(routes)}</ul>
		</If>
	</nav>
);

Navigation.propTypes = {
	routes: PropTypes.arrayOf(RouteShape),
	className: PropTypes.string
};

Navigation.defaultProps = {
	routes: [],
	className: ''
};

export default Navigation;
