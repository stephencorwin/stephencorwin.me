import React from 'react';
import PropTypes from 'prop-types';

import { pages } from '../../../app.config';
import Default from '../../components/Layouts/Default';
import PortfolioTile from '../../components/PortfolioTile';
import A from '../../components/A';

const { route } = pages.portfolio;

export const PortfolioHolder = ({ className }) => (
	<Default route={route} className={className}>
		<For each="item" of={pages.portfolio.items}>
			<A
				href={{ pathname: route.href, query: { slug: item.slug } }}
				as={`${route.href}/${item.slug}`}
				key={item.slug}
			>
				<PortfolioTile label={item.label} description={item.description} image={item.image} />
			</A>
		</For>
	</Default>
);

PortfolioHolder.propTypes = {
	className: PropTypes.string
};

PortfolioHolder.defaultProps = {
	className: ''
};

export default PortfolioHolder;
