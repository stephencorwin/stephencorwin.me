import styled from 'styled-components';

export const Header = styled.header`
	font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
	font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
	height: 70px;

	a {
		align-items: center;
		display: flex;
		justify-content: center;
		color: ${({ theme: { colors } }) => colors.white};
		width: 100%;
		height: 100%;
	}
`;

export const Sidebar = Component => styled(Component)`
	background-color: ${({ theme: { colors } }) => colors.blue.dark};
	box-shadow: ${({ theme: { shadows } }) => shadows.right};
	display: none;
	flex-direction: column;
	height: 100%;
	width: 300px;
	min-width: 300px;
	z-index: ${({ theme: { zindexes } }) => zindexes.base};

	@media (min-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
		display: flex;
	}
`;

export default Sidebar;
