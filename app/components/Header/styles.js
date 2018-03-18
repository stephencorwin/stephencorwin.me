import styled from 'styled-components';
import A from '../A';

export const Title = styled(A)`
	align-items: center;
	box-sizing: border-box;
	color: ${({ theme: { colors } }) => colors.white};
	display: flex;
	flex-grow: 1;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
	font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
	height: 100%;
	padding: 0 ${({ theme: { spacings } }) => spacings.sm};
`;

export const Header = Component => styled(Component)`
	background-color: ${({ theme: { colors } }) => colors.blue};
	box-shadow: ${({ theme: { shadows } }) => shadows.default};
	display: flex;
	height: 50px;

	@media (min-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
		display: none;
	}
`;

export default Header;
