import React from 'react';
import PropTypes from 'prop-types';

import config from '../../../../app.config';
import Layout from '../Layout';
import Sidebar from '../../Sidebar';
import Navigation from '../../Navigation';
import Wrapper from '../../Wrapper';

import RouteShape from '../../../prop-types/Route';

export const Default = ({ route, className, children }) => (
	<Layout className={className} route={route}>
		<Sidebar>
			<Navigation routes={config.navigation} />
		</Sidebar>
		<Wrapper>
			<If condition={route.label}>
				<h1>{route.label}</h1>
			</If>

			<div>{children}</div>
		</Wrapper>
	</Layout>
);

Default.propTypes = {
	route: RouteShape.isRequired,
	className: PropTypes.string,
	children: PropTypes.node
};

Default.defaultProps = {
	className: '',
	children: undefined
};

export default Default;
