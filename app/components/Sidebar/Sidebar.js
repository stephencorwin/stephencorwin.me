import React from 'react';
import PropTypes from 'prop-types';

export const Sidebar = ({ className, children }) => <div className={className}>{children}</div>;

Sidebar.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

Sidebar.defaultProps = {
	className: '',
	children: undefined
};

export default Sidebar;
