import styled from 'styled-components';

export const NavLinks = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const NavLink = styled.li`
	font-size: ${({ theme }) => theme.fontSizes.sm};
	height: 60px;
	width: 100%;

	a {
		align-items: center;
		box-sizing: border-box;
		display: flex;
		color: ${({ theme }) => theme.colors.white.dark};
		padding: 0 ${({ theme }) => theme.spacings.sm};
		transition: color 0.5s ease;
		text-decoration: none;
		text-transform: lowercase;
		width: 100%;
		height: 100%;

		&:hover {
			color: ${({ theme }) => theme.colors.white};
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			justify-content: center;
		}
	}
`;

export const ActiveNavLink = styled(NavLink)`
	a {
		background-color: ${({ theme }) => theme.colors.blue.light};
		box-shadow: ${({ theme }) => theme.shadows.right};
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const Navigation = Component => styled(Component)`
	flex-grow: 1;
	overflow-x: hidden;
	overflow-y: auto;
`;

export default Navigation;
