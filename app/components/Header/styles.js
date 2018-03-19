import styled from 'styled-components';
import A from '../A';

const size = '50px';

export const Button = styled.button`
	border: 0;
	background-color: ${({ theme: { colors } }) => colors.blue.light};
	color: ${({ theme: { colors } }) => colors.white};
	cursor: pointer;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: ${size};
	outline: none;
`;

export const Menu = styled.menu`
	background-color: ${({ theme: { colors } }) => colors.blue};
	border-top: 2px solid ${({ theme: { colors } }) => colors.blue.light};
	display: flex;
	flex-direction: column;
	margin: 0;
	overflow: hidden;
	padding: 0;
	position: absolute;
	top: ${size};
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	z-index: ${({ theme: { zindexes } }) => zindexes.header};
`;

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
	white-space: nowrap;
`;

export const Header = Component => styled(Component)`
	background-color: ${({ theme: { colors } }) => colors.blue};
	box-shadow: ${({ theme: { shadows } }) => shadows.default};
	display: flex;
	height: ${size};
	min-height: ${size};

	@media (min-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
		display: none;
	}
`;

export default Header;
