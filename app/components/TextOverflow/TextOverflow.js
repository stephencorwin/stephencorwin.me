import React from 'react';
import PropTypes from 'prop-types';

export const TextOverflow = ({ children, className }) => (
	<div className={className}>{children}</div>
);

TextOverflow.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

TextOverflow.defaultProps = {
	className: '',
	children: undefined
};

export default TextOverflow;
