import styled from 'styled-components';

export const Header = Component => styled(Component)`
	background-color: ${({ theme: { colors } }) => colors.blue};
	box-sizing: border-box;
	color: ${({ theme: { colors } }) => colors.white};
	display: flex;
	align-items: center;
	padding: 0 ${({ theme: { spacings } }) => spacings.sm};
	height: 50px;

	@media (min-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
		display: none;
	}
`;

export default Header;
