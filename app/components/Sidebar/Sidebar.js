import React from 'react';
import PropTypes from 'prop-types';

export const Sidebar = ({ className, children }) => (
	<aside className={className}>{children}</aside>
);

Sidebar.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

Sidebar.defaultProps = {
	className: '',
	children: undefined
};

export default Sidebar;
