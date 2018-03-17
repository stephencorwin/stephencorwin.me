import styled from 'styled-components';

export const Header = styled.header`
	align-items: center;
	display: flex;
	justify-content: center;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
	font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
	height: 70px;

	a {
		color: ${({ theme: { colors } }) => colors.white};
	}
`;

export const Sidebar = Component => styled(Component)`
	background-color: ${({ theme: { colors } }) => colors.blue.dark};
	box-shadow: ${({ theme: { shadows } }) => shadows.right};
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 300px;
	min-width: 300px;
`;

export default Sidebar;
