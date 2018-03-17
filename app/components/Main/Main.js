import React from 'react';
import PropTypes from 'prop-types';

export const Main = ({ className, children }) => (
	<main className={className}>{children}</main>
);

Main.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

Main.defaultProps = {
	className: '',
	children: undefined
};

export default Main;
