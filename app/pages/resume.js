import React from 'react';
import PropTypes from 'prop-types';

import { pages } from '../../app.config';
import Default from '../components/Layouts/Default';

export const ResumePage = ({ className }) => (
	<Default route={pages.resume.route} className={className}>
		Resume Page
	</Default>
);

ResumePage.propTypes = {
	className: PropTypes.string
};

ResumePage.defaultProps = {
	className: ''
};

export default ResumePage;
