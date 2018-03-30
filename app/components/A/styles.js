import styled from 'styled-components';

export const A = Component => styled(Component)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.blue};
`;

export default A;
