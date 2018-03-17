import styled from 'styled-components';

export const Header = Component => styled(Component)`
	background-color: ${({ theme: { colors } }) => colors.blue};
	box-sizing: border-box;
	color: ${({ theme: { colors } }) => colors.white};
	display: flex;
	align-items: center;
	padding: ${({ theme: { spacings } }) => spacings.xs};
	height: 50px;
`;

export default Header;
