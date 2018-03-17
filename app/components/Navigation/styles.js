import styled from 'styled-components';

export const NavLinks = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const NavLink = styled.li`
	font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
	height: 60px;
	width: 100%;

	a {
		align-items: center;
		box-sizing: border-box;
		display: flex;
		color: ${({ theme: { colors } }) => colors.white.dark};
		padding: 0 ${({ theme: { spacings } }) => spacings.sm};
		transition: color 0.5s ease;
		text-decoration: none;
		text-transform: lowercase;
		width: 100%;
		height: 100%;

		&:hover {
			color: ${({ theme: { colors } }) => colors.white};
		}

		@media (min-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
			justify-content: center;
		}
	}
`;

export const ActiveNavLink = styled(NavLink)`
	background-color: ${({ theme: { colors } }) => colors.blue.light};
	box-shadow: ${({ theme: { shadows } }) => shadows.default};

	a {
		color: ${({ theme: { colors } }) => colors.white};
	}
`;

export const Navigation = Component => styled(Component)``;

export default Navigation;
