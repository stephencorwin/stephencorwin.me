import React from 'react';
import PropTypes from 'prop-types';

import { pages } from '../../../app.config';
import PortfolioItemShape from '../../prop-types/PortfolioItem';
import Default from '../../components/Layouts/Default';

const { items, route } = pages.portfolio;
const getPortfolioItem = slug => items.find(item => item.slug === slug);

export const PortfolioItem = ({ slug, portfolioItem = getPortfolioItem(slug), className }) => (
	<Choose>
		<When condition={portfolioItem}>
			<Default
				route={Object.assign({}, route, {
					label: portfolioItem.label,
					title: `${route.title} | ${portfolioItem.label}`,
					description: portfolioItem.description
				})}
				className={className}
			>
				<div>{portfolioItem.label}</div>
				<div>{portfolioItem.description}</div>
				<img src={portfolioItem.image} alt={portfolioItem.label} />
			</Default>
		</When>
		<Otherwise>
			<Default
				route={Object.assign({}, route, {
					label: `${slug} not found`,
					title: `${route.title} | ${slug} not found`
				})}
				className={className}
			/>
		</Otherwise>
	</Choose>
);

PortfolioItem.propTypes = {
	slug: PropTypes.string,
	portfolioItem: PortfolioItemShape,
	className: PropTypes.string
};

PortfolioItem.defaultProps = {
	slug: undefined,
	portfolioItem: undefined,
	className: ''
};

export default PortfolioItem;
