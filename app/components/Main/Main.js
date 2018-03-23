import React from 'react';
import PropTypes from 'prop-types';

export const Main = ({ className, children, paddedx, paddedy, ...props }) => (
	<main
		className={className}
		paddedx={paddedx.toString()}
		paddedy={paddedy.toString()}
		{...props}
	>
		{children}
	</main>
);

Main.propTypes = {
	paddedx: PropTypes.bool,
	paddedy: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node
};

Main.defaultProps = {
	paddedx: false,
	paddedy: false,
	className: '',
	children: undefined
};

export default Main;
