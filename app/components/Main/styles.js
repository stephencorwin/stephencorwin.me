import styled from 'styled-components';

export const Main = Component => styled(Component)`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	padding: 0 ${({ theme: { spacings } }) => spacings.sm};

	/* firefox fix for padding around a flex element */
	&::before,
	&::after {
		content: '';
		display: block;
		height: ${({ theme: { spacings } }) => spacings.sm};
		min-height: ${({ theme: { spacings } }) => spacings.sm};
	}
`;

export default Main;
