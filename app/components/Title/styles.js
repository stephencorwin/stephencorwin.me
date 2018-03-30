import styled from 'styled-components';

export const Title = Component => styled(Component)`
	box-sizing: border-box;
	border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.blue};
	margin-top: 0;
	margin-bottom: ${({ theme }) => theme.spacings.xs};
	padding-bottom: ${({ theme }) => theme.spacings.xs};
`;

export default Title;
