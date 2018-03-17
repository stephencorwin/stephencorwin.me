import styled from 'styled-components';

export const Main = Component => styled(Component)`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	padding: ${({ theme: { spacings } }) => spacings.sm};
`;

export default Main;
