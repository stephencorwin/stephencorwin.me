import styled from 'styled-components';

export const NavBtn = Component => styled(Component)`
	border: 0;
	background: none;
	text-shadow: ${({ theme }) => theme.shadows.text};
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
	font-size: ${({ theme }) => theme.fontSizes.lg};
	outline: none;
`;

export default NavBtn;
