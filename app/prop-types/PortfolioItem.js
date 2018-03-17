import PropTypes from 'prop-types';

export default PropTypes.shape({
	slug: PropTypes.string.isRequired,
	label: PropTypes.string,
	client: PropTypes.string,
	description: PropTypes.string,
	startDate: PropTypes.string,
	endDate: PropTypes.string,
	references: PropTypes.arrayOf(PropTypes.string),
	tags: PropTypes.arrayOf(PropTypes.string),
	images: PropTypes.arrayOf(PropTypes.string)
});
