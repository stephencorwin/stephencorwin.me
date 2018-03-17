import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ className, children }) => (
	<div className={className}>{children}</div>
);

Header.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

Header.defaultProps = {
	className: '',
	children: undefined
};

export default Header;
