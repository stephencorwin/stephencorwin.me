import React from 'react';
import PropTypes from 'prop-types';

export const P = ({ children, className, ...props }) => (
	<p className={className} {...props}>
		{children}
	</p>
);

P.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

P.defaultProps = {
	className: '',
	children: undefined
};

export default P;
