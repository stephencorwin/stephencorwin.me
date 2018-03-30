import styled from 'styled-components';

export const P = Component => styled(Component)`
	font-size: ${({ theme }) => theme.fontSizes.sm};
	line-height: 1.5;
	margin: 0;

	& + & {
		margin-top: ${({ theme }) => theme.spacings.xs};
	}
`;

export const Disabled = Component => styled(P(Component))`
	color: ${({ theme }) => theme.colors.gray};
`;

export default P;
