import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import '@scorewin/font/css/scorewin.css';

import config from '../../../../app.config';
import theme from '../../../styles/theme.styles';
import RouteShape from '../../../prop-types/Route';

export const Layout = ({ route, className, children }) => (
	<ThemeProvider theme={theme}>
		<Fragment>
			<Head>
				<meta
					name="description"
					content={route.description || config.description}
				/>
				<title>{route.title || config.title}</title>
			</Head>

			<div className={className}>{children}</div>
		</Fragment>
	</ThemeProvider>
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
