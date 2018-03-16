import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { pages } from '../../../app.config';
import Default from '../../components/Layouts/Default';

const { route } = pages.portfolio;

export const PortfolioHolder = ({ className }) => (
	<Default route={route} className={className}>
		<For each="item" of={pages.portfolio.items}>
			<Link
				href={{ pathname: route.href, query: { slug: item.slug } }}
				as={`${route.href}/${item.slug}`}
				key={item.slug}
			>
				<a>
					<h4>{item.label}</h4>
					<p>{item.description}</p>
					<img src={item.image} alt={item.label} />
				</a>
			</Link>
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
