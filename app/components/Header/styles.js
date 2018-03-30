import styled from 'styled-components';
import A from '../A';

const size = '50px';

export const Button = styled.button`
	border: 0;
	background-color: ${({ theme }) => theme.colors.blue.light};
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
	font-size: ${({ theme }) => theme.fontSizes.md};
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: ${size};
	outline: none;
`;

export const Menu = styled.menu`
	background-color: ${({ theme }) => theme.colors.blue};
	border-top: 2px solid ${({ theme }) => theme.colors.blue.light};
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
	z-index: ${({ theme }) => theme.zindexes.header};
`;

export const Title = styled(A)`
	align-items: center;
	box-sizing: border-box;
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-grow: 1;
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
	height: 100%;
	padding: 0 ${({ theme }) => theme.spacings.sm};
	white-space: nowrap;
`;

export const Header = Component => styled(Component)`
	background-color: ${({ theme }) => theme.colors.blue};
	box-shadow: ${({ theme }) => theme.shadows.default};
	display: flex;
	height: ${size};
	min-height: ${size};
	z-index: ${({ theme }) => theme.zindexes.header};

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: none;
	}
`;

export default Header;
