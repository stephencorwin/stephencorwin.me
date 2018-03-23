import styled from 'styled-components';

export const Main = Component => styled(Component)`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	padding-left: ${({ paddedx, theme: { spacings } }) =>
		paddedx ? spacings.sm : 0};
	padding-right: ${({ paddedx, theme: { spacings } }) =>
		paddedx ? spacings.sm : 0};

	/* firefox fix for padding around a flex element */
	&::before,
	&::after {
		content: '';
		display: block;
		height: ${({ paddedy, theme: { spacings } }) =>
			paddedy ? spacings.sm : 0};
		min-height: ${({ paddedy, theme: { spacings } }) =>
			paddedy ? spacings.sm : 0};
	}
`;

export default Main;
