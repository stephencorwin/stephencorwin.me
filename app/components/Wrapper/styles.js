import styled from 'styled-components';

export const Wrapper = Component => styled(Component)`
	width: 100%;
	max-width: ${({ theme: { breakpoints } }) => breakpoints.lg};
	margin: 0 auto;
`;

export default Wrapper;
