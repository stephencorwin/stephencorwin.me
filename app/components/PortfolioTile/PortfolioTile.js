import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../Tile';

export const PortfolioTile = ({ label, image, className }) => (
	<Tile
		style={{ backgroundImage: `url('${image}')` }}
		title={label}
		className={className}
	/>
);

PortfolioTile.propTypes = {
	label: PropTypes.string,
	image: PropTypes.string,
	className: PropTypes.string
};

PortfolioTile.defaultProps = {
	label: '',
	image: '',
	className: ''
};

export default PortfolioTile;
