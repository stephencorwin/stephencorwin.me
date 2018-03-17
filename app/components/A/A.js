import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export const A = ({ title, children, style, className, ...props }) => (
	<Link {...props}>
		<a title={title} style={style} className={className}>
			{children}
		</a>
	</Link>
);

A.propTypes = {
	title: PropTypes.string,
	style: PropTypes.objectOf(PropTypes.any),
	className: PropTypes.string,
	children: PropTypes.node
};

A.defaultProps = {
	title: '',
	className: '',
	style: undefined,
	children: undefined
};

export default A;
