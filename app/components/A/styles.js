import styled from 'styled-components';

export const A = Component => styled(Component)`
	text-decoration: none;
	color: ${({ theme: { colors } }) => colors.blue};
`;

export default A;
