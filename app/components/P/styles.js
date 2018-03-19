import styled from 'styled-components';

export const P = Component => styled(Component)`
	font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
	line-height: 1.5;
	margin: 0;

	& + & {
		margin-top: ${({ theme: { spacings } }) => spacings.xs};
	}
`;

export const Disabled = Component => styled(P(Component))`
	color: ${({ theme: { colors } }) => colors.gray};
`;

export default P;
