import styled from 'styled-components';

export const Title = Component => styled(Component)`
	box-sizing: border-box;
	border-bottom: 2px solid ${({ theme: { colors } }) => colors.blue};
	color: ${({ theme: { colors } }) => colors.blue};
	margin-top: 0;
	margin-bottom: ${({ theme: { spacings } }) => spacings.xs};
	padding-bottom: ${({ theme: { spacings } }) => spacings.xs};
`;

export default Title;
