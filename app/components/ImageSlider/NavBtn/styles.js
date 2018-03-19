import styled from 'styled-components';

export const NavBtn = Component => styled(Component)`
	border: 0;
	background: none;
	text-shadow: ${({ theme: { shadows } }) => shadows.text};
	color: ${({ theme: { colors } }) => colors.white};
	cursor: pointer;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
	outline: none;
`;

export default NavBtn;
