import styled from 'styled-components';
import { breakpoints } from '../../../styles/theme.styles';

export const Layout = Component => styled(Component)`
	display: flex;
	flex-direction: column;
	flex: 1 0 auto;
	height: 100%;
	min-height: 100vh;

	@media (min-width: ${breakpoints.sm}) {
		flex-direction: row;
	}
`;

export default Layout;
