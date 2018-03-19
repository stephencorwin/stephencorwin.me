import React from 'react';
import PropTypes from 'prop-types';

export const NavBtn = ({ icon, ...props }) => (
	<button {...props}>
		<i className={icon} />
	</button>
);

NavBtn.propTypes = {
	icon: PropTypes.string
};

NavBtn.defaultProps = {
	icon: ''
};

export default NavBtn;
