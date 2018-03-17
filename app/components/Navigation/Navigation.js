import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import A from '../A';
import RouteShape from '../../prop-types/Route';
import { ActiveNavLink, NavLink, NavLinks } from './styles';

export const Navigation = ({ router, routes, className }) => (
	<nav className={className}>
		<If condition={routes.length}>
			<NavLinks>
				<For each="route" of={routes}>
					<Choose>
						<When condition={router.pathname === route.href}>
							<ActiveNavLink key={route.href}>
								<A href={route.href} title={route.label} style={route.style}>
									{route.label}
								</A>
							</ActiveNavLink>
						</When>
						<Otherwise>
							<NavLink key={route.href}>
								<A href={route.href} title={route.label} style={route.style}>
									{route.label}
								</A>
							</NavLink>
						</Otherwise>
					</Choose>
				</For>
			</NavLinks>
		</If>
	</nav>
);

Navigation.propTypes = {
	router: PropTypes.shape({
		pathname: PropTypes.string
	}).isRequired,
	routes: PropTypes.arrayOf(RouteShape),
	className: PropTypes.string
};

Navigation.defaultProps = {
	routes: [],
	className: ''
};

export default withRouter(Navigation);
