import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import config from '../../../../app.config';
import theme from '../../../styles/theme.styles';
import RouteShape from '../../../prop-types/Route';
import { Main } from './styles';

export const Layout = ({ route, className, children }) => (
	<ThemeProvider theme={theme}>
		<Fragment>
			<Head>
				<meta name="description" content={route.description || config.description} />
				<title>{route.title || config.title}</title>
			</Head>

			<Main className={className}>{children}</Main>
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
