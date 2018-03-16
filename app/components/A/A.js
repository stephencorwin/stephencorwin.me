import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export const A = ({ children, className, ...props }) => (
	<Link {...props}>
		<a className={className}>{children}</a>
	</Link>
);

A.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

A.defaultProps = {
	className: '',
	children: undefined
};

export default A;
