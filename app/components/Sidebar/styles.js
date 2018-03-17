import styled from 'styled-components';

export const Sidebar = Component => styled(Component)`
	background-color: ${({ theme: { colors } }) => colors.blue};
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 300px;

	a {
		color: ${({ theme: { colors } }) => colors.white};
	}
`;

export default Sidebar;
