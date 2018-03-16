import React from 'react';
import PropTypes from 'prop-types';

export const Tile = ({ className, children, ...props }) => (
	<div className={className} {...props}>
		{children}
	</div>
);

Tile.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

Tile.defaultProps = {
	className: '',
	children: undefined
};

export default Tile;
