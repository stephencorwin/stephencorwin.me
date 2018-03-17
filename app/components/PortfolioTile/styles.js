import styled from 'styled-components';

export const PortfolioTile = Component => styled(Component)`
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	box-sizing: border-box;
	padding: ${({ theme: { spacings } }) => spacings.xs};
	color: ${({ theme: { colors } }) => colors.white};
`;

export default PortfolioTile;
