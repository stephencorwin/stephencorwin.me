import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';

export const PortfolioTile = ({ label, description, image, className }) => (
	<Tile
		style={{ backgroundImage: `url('${image}')` }}
		title={`${label} - ${description}`}
		className={className}
	/>
);

PortfolioTile.propTypes = {
	label: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	className: PropTypes.string
};

PortfolioTile.defaultProps = {
	label: '',
	description: '',
	image: '',
	className: ''
};

export default PortfolioTile;
