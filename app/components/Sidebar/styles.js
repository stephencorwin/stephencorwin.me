import styled from 'styled-components';

export const Header = styled.header`
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	height: 70px;

	a {
		align-items: center;
		display: flex;
		justify-content: center;
		color: ${({ theme }) => theme.colors.white};
		width: 100%;
		height: 100%;
	}
`;

export const Sidebar = Component => styled(Component)`
	background-color: ${({ theme }) => theme.colors.blue.dark};
	box-shadow: ${({ theme }) => theme.shadows.right};
	display: none;
	flex-direction: column;
	height: 100%;
	width: 300px;
	min-width: 300px;
	z-index: ${({ theme }) => theme.zindexes.base};

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: flex;
	}
`;

export default Sidebar;
