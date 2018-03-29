import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default PropTypes.shape({
	href: PropTypes.string.isRequired,
	label: PropTypes.string,
	icon: FontAwesomeIcon.propTypes.icon
});
