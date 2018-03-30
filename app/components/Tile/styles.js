import styled from 'styled-components';

const config = {
	size: '300px'
};

export const Tile = Component => styled(Component)`
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: ${({ theme }) => theme.shadows.default};
	height: ${config.size};
	width: 100%;
`;

export default Tile;
