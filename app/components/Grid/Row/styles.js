import styled from 'styled-components';

export const Row = Component => styled(Component)`
	/* fixes a bug with nested flex containers + padding */
	flex-shrink: 0;
	margin: -0.5em;
`;

export default Row;
