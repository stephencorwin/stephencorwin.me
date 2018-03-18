import React from 'react';
import PropTypes from 'prop-types';

import RouteShape from '../../prop-types/Route';
import { Title } from './styles';

export const Header = ({ headerRoute, className, children }) => (
	<header className={className}>
		<If condition={headerRoute}>
			<Title href={headerRoute.href} title={headerRoute.label}>
				{headerRoute.label}
			</Title>
		</If>
		<button>
			<i className="fa fa-bars" />
		</button>
		<menu style={{ display: 'none' }}>{children}</menu>
	</header>
);

Header.propTypes = {
	headerRoute: RouteShape,
	className: PropTypes.string,
	children: PropTypes.node
};

Header.defaultProps = {
	headerRoute: undefined,
	className: '',
	children: undefined
};

export default Header;
