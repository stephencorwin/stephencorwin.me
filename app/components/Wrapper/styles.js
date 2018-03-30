import styled from 'styled-components';

export const Wrapper = Component => styled(Component)`
	box-sizing: border-box;
	padding: ${({ theme }) => theme.spacings.sm};
	width: 100%;
`;

export default Wrapper;
