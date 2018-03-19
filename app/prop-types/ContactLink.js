import PropTypes from 'prop-types';

export default PropTypes.shape({
	href: PropTypes.string.isRequired,
	label: PropTypes.string,
	icon: PropTypes.string
});
