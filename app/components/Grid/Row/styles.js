import styled from 'styled-components';

export const Row = Component => styled(Component)`
	/* // fixes a bug with nested flex containers + padding */
	flex: none;
`;

export default Row;
