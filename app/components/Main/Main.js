import React from 'react';
import PropTypes from 'prop-types';

export const Main = ({ className, children, ...props }) => (
	<main className={className} {...props}>
		{children}
	</main>
);

Main.propTypes = {
	// eslint-disable-next-line react/no-unused-prop-types
	paddedX: PropTypes.bool,

	// eslint-disable-next-line react/no-unused-prop-types
	paddedY: PropTypes.bool,

	className: PropTypes.string,
	children: PropTypes.node
};

Main.defaultProps = {
	paddedX: false,
	paddedY: false,
	className: '',
	children: undefined
};

export default Main;
