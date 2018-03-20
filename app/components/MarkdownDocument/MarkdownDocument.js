import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

export const MarkdownDocument = ({ source, className }) => (
	<section className={className}>
		<Markdown source={source} />
	</section>
);

MarkdownDocument.propTypes = {
	source: PropTypes.string,
	className: PropTypes.string
};

MarkdownDocument.defaultProps = {
	source: '',
	className: ''
};

export default MarkdownDocument;
