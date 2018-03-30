import styled from 'styled-components';

export const TextOverflow = Component => styled(Component)`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export default TextOverflow;
