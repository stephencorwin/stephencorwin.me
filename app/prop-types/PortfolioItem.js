import PropTypes from 'prop-types';

export default PropTypes.shape({
	slug: PropTypes.string.isRequired,
	label: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string
});
