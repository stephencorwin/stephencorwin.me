import styled from 'styled-components';

export const PortfolioTile = Component => styled(Component)`
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	box-sizing: border-box;
	padding: ${({ theme }) => theme.spacings.xs};
	color: ${({ theme }) => theme.colors.white};
`;

export default PortfolioTile;
