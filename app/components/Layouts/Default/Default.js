import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';

import config, { contact, pages } from '../../../../app.config';
import { breakpoints } from '../../../styles/theme.styles';
import Layout from '../Layout';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Navigation from '../../Navigation';
import ContactLinks from '../../ContactLinks';
import Main from '../../Main';
import RouteShape from '../../../prop-types/Route';

const contactLinks = Object.values(contact);

export const Default = ({
	route,
	invertBackground,
	className,
	children,
	...other
}) => (
	<Layout
		className={className}
		route={route}
		invertBackground={invertBackground}
	>
		{/* MOBILE */}
		<Media
			query={{ maxWidth: breakpoints.sm.int }}
			render={() => (
				<Header headerRoute={pages.home.route}>
					<Navigation routes={config.navigation} />
					<ContactLinks links={contactLinks} />
				</Header>
			)}
		/>

		{/* OTHER */}
		<Media
			query={{ minWidth: breakpoints.sm.int }}
			render={() => (
				<Sidebar headerRoute={pages.home.route}>
					<Navigation routes={config.navigation} />
					<ContactLinks links={contactLinks} />
				</Sidebar>
			)}
		/>
		<Main {...other}>{children}</Main>
	</Layout>
);

Default.propTypes = {
	route: RouteShape.isRequired,
	invertBackground: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node
};

Default.defaultProps = {
	invertBackground: false,
	className: '',
	children: undefined
};

export default Default;
