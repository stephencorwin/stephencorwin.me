import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export const Links = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const Icon = styled(FontAwesomeIcon)`
	color: ${({ theme: { colors } }) => colors.white};
	margin-right: ${({ theme: { spacings } }) => spacings.xs};

	&& {
		font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
	}
`;

export const Link = styled.li`
	display: block;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
	width: 100%;

	a {
		align-items: center;
		box-sizing: border-box;
		display: flex;
		filter: drop-shadow(${({ theme: { shadows } }) => shadows.textLight});
		padding: 2px ${({ theme: { spacings } }) => spacings.sm};
		transition: color 0.5s ease;
		text-decoration: none;
		text-transform: lowercase;
		width: 100%;

		&,
		&:hover {
			color: ${({ theme: { colors } }) => colors.white};
		}
	}
`;

export const ContactLinks = Component => styled(Component)`
	box-sizing: border-box;
	padding: ${({ theme: { spacings } }) => spacings.sm} 0;
`;

export default ContactLinks;
