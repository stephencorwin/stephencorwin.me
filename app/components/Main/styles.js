import styled from 'styled-components';

export const Main = Component => styled(Component)`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	padding-left: ${({ paddedX, theme: { spacings } }) =>
		paddedX ? spacings.sm : 0};
	padding-right: ${({ paddedX, theme: { spacings } }) =>
		paddedX ? spacings.sm : 0};

	/* firefox fix for padding around a flex element */
	&::before,
	&::after {
		content: '';
		display: block;
		height: ${({ paddedY, theme: { spacings } }) =>
			paddedY ? spacings.sm : 0};
		min-height: ${({ paddedY, theme: { spacings } }) =>
			paddedY ? spacings.sm : 0};
	}
`;

export default Main;
