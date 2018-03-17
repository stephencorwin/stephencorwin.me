import styled from 'styled-components';

export const Main = Component => styled(Component)`
	box-sizing: border-box;
	padding: ${({ theme: { spacings } }) => spacings.sm};
`;

export default Main;
