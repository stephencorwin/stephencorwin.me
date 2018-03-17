import styled from 'styled-components';

export const NavLinks = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const NavLink = styled.li`
	align-items: center;
	display: flex;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
	height: 60px;
	width: 100%;

	@media (min-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
		justify-content: center;
	}

	a {
		color: ${({ theme: { colors } }) => colors.white.dark};
		padding: 0 ${({ theme: { spacings } }) => spacings.sm};
		transition: color 0.5s ease;
		text-decoration: none;

		&:hover {
			color: ${({ theme: { colors } }) => colors.white};
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
