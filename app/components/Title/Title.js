import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ className, children }) => (
	<h1 className={className}>{children}</h1>
);

Title.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

Title.defaultProps = {
	className: '',
	children: undefined
};

export default Title;
