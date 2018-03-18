import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';

import config, { pages } from '../../../../app.config';
import { breakpoints } from '../../../styles/theme.styles';
import Layout from '../Layout';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Navigation from '../../Navigation';
import Main from '../../Main';

import RouteShape from '../../../prop-types/Route';

export const Default = ({ route, className, children }) => (
	<Layout className={className} route={route}>
		{/* MOBILE */}
		<Media
			query={{ maxWidth: breakpoints.sm.int }}
			render={() => <Header>Header</Header>}
		/>

		{/* OTHER */}
		<Media
			query={{ minWidth: breakpoints.sm.int }}
			render={() => (
				<Sidebar headerRoute={pages.home.route}>
					<Navigation routes={config.navigation} />
				</Sidebar>
			)}
		/>
		<Main>{children}</Main>
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
