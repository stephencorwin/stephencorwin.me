import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';

import config from '../../../../app.config';
import { breakpoints } from '../../../styles/theme.styles';
import Layout from '../Layout';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Navigation from '../../Navigation';
import Wrapper from '../../Wrapper';

import RouteShape from '../../../prop-types/Route';

export const Default = ({ route, className, children }) => (
	<Layout className={className} route={route}>
		<Media query={{ minWidth: breakpoints.sm.int }}>
			{matches => (
				<Choose>
					<When condition={matches}>
						<Sidebar>
							<Navigation routes={config.navigation} />
						</Sidebar>
					</When>
					<Otherwise>
						<Header>Header</Header>
					</Otherwise>
				</Choose>
			)}
		</Media>
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
