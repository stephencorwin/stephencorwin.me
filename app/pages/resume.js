import React from 'react';
import PropTypes from 'prop-types';
import Resume from '@stephencorwin/resume/export/stephen-corwin_resume.md';

import { pages } from '../../app.config';
import Default from '../components/Layouts/Default';
import MarkdownDocument from '../components/MarkdownDocument';

const { route } = pages.resume;

export const ResumePage = ({ className }) => (
	<Default route={route} className={className} invertBackground paddedx paddedy>
		<MarkdownDocument source={Resume} />
	</Default>
);

ResumePage.propTypes = {
	className: PropTypes.string
};

ResumePage.defaultProps = {
	className: ''
};

export default ResumePage;
