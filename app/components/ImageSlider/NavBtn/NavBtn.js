import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export const NavBtn = ({ icon, ...props }) => (
	<button {...props}>
		<FontAwesomeIcon icon={icon} />
	</button>
);

NavBtn.propTypes = {
	// eslint-disable-next-line react/no-typos
	icon: FontAwesomeIcon.propTypes.icon.isRequired
};

export default NavBtn;
