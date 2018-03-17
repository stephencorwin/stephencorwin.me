import React from 'react';
import PropTypes from 'prop-types';

import RouteShape from '../../prop-types/Route';
import { Header } from './styles';
import A from '../A';

export const Sidebar = ({ headerRoute, className, children }) => (
	<aside className={className}>
		<If condition={headerRoute}>
			<Header>
				<A href={headerRoute.href} title={headerRoute.label}>
					{headerRoute.label}
				</A>
			</Header>
		</If>
		{children}
	</aside>
);

Sidebar.propTypes = {
	headerRoute: RouteShape,
	className: PropTypes.string,
	children: PropTypes.node
};

Sidebar.defaultProps = {
	headerRoute: undefined,
	className: '',
	children: undefined
};

export default Sidebar;
