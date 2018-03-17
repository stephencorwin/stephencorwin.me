import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-styled-flexboxgrid';

import { pages } from '../../../app.config';
import Default from '../../components/Layouts/Default';
import Col from '../../components/Col';
import PortfolioTile from '../../components/PortfolioTile';
import A from '../../components/A';

const { route } = pages.portfolio;

export const PortfolioHolder = ({ className }) => (
	<Default route={route} className={className}>
		<Row>
			<For each="item" of={pages.portfolio.items}>
				<Col xs={12} sm={6} lg={3} key={item.slug}>
					<A
						href={{ pathname: route.href, query: { slug: item.slug } }}
						as={`${route.href}/${item.slug}`}
					>
						<PortfolioTile
							label={item.label}
							description={item.description}
							image={item.image}
						/>
					</A>
				</Col>
			</For>
		</Row>
	</Default>
);

PortfolioHolder.propTypes = {
	className: PropTypes.string
};

PortfolioHolder.defaultProps = {
	className: ''
};

export default PortfolioHolder;
