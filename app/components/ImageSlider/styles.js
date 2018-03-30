import styled from 'styled-components';
import NavBtn from './NavBtn';

export const StyledNavBtn = styled(NavBtn)`
	position: absolute;
	top: 50%;
	z-index: ${({ theme }) => theme.zindexes.controls};
`;

export const NextBtn = styled(StyledNavBtn)`
	right: ${({ theme }) => theme.spacings.xs};
`;

export const PrevBtn = styled(StyledNavBtn)`
	left: ${({ theme }) => theme.spacings.xs};
`;

export const Image = styled.div`
	background-color: ${({ theme }) => theme.colors.black};
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	height: 300px;
	float: left;

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		height: 600px;
	}
`;

export const ImageSlider = Component => styled(Component)`
	position: relative;
	width: 100%;

	&::before,
	&::after {
		content: ' ';
		display: table;
	}

	&::after {
		clear: both;
	}
`;

export default ImageSlider;
