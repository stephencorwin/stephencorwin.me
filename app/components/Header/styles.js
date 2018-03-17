import styled from 'styled-components';

export const Header = Component => styled(Component)`
	background-color: ${({ theme: { colors } }) => colors.blue};
	box-sizing: border-box;
	color: ${({ theme: { colors } }) => colors.white};
	display: flex;
	align-items: center;
	padding: 0 ${({ theme: { spacings } }) => spacings.sm};
	height: 50px;
`;

export default Header;
