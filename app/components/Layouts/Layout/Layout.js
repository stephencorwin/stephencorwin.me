import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import config from '../../../../app.config';
import RouteShape from '../../../prop-types/Route';

export const Layout = ({ route, className, children }) => (
	<Fragment>
		<Head>
			<meta name="description" content={route.description || config.description} />
			<title>{route.title || config.title}</title>
		</Head>

		<main className={className}>{children}</main>
	</Fragment>
);

Layout.propTypes = {
	route: RouteShape.isRequired,
	className: PropTypes.string,
	children: PropTypes.node
};

Layout.defaultProps = {
	className: '',
	children: undefined
};

export default Layout;
