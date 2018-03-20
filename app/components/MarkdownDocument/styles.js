import styled from 'styled-components';

export const MarkdownDocument = Component => styled(Component)`
	background-color: ${({ theme: { colors } }) => colors.white};
	box-sizing: border-box;
	box-shadow: ${({ theme: { shadows } }) => shadows.default};
	margin: 0 auto;
	max-width: ${({ theme: { breakpoints } }) => breakpoints.lg};
	padding: ${({ theme: { spacings } }) => `${spacings.md} ${spacings.lg}`};
	width: 100%;

	blockquote {
		box-sizing: border-box;
		border-left: 0.25em solid #dfe2e5;
		margin-left: 0;
		padding-left: 40px;
	}

	h1 {
		padding-bottom: 0.3em;
		font-size: 2em;
		border-bottom: 1px solid #eaecef;
	}

	h2 {
		padding-bottom: 0.3em;
		font-size: 1.5em;
		border-bottom: 1px solid #eaecef;
	}

	li + li {
		line-height: 1.5;
		margin-top: 0.25em;
	}

	p {
		line-height: 1.5;
	}
`;

export default MarkdownDocument;
