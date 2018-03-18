import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ className, children }) => (
	<header className={className}>{children}</header>
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
