import React from 'react';
import PropTypes from 'prop-types';

export const Wrapper = ({ className, children }) => <div className={className}>{children}</div>;

Wrapper.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

Wrapper.defaultProps = {
	className: '',
	children: undefined
};

export default Wrapper;
