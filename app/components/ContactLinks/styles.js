import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export const Links = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const Icon = styled(FontAwesomeIcon)`
	color: ${({ theme }) => theme.colors.white};
	margin-right: ${({ theme }) => theme.spacings.xs};

	&& {
		font-size: ${({ theme }) => theme.fontSizes.sm};
	}
`;

export const Link = styled.li`
	display: block;
	font-size: ${({ theme }) => theme.fontSizes.xs};
	width: 100%;

	a {
		align-items: center;
		box-sizing: border-box;
		display: flex;
		filter: drop-shadow(${({ theme }) => theme.shadows.textLight});
		padding: 2px ${({ theme }) => theme.spacings.sm};
		transition: color 0.5s ease;
		text-decoration: none;
		text-transform: lowercase;
		width: 100%;

		&,
		&:hover {
			color: ${({ theme }) => theme.colors.white};
		}
	}
`;

export const ContactLinks = Component => styled(Component)`
	box-sizing: border-box;
	padding: ${({ theme }) => theme.spacings.sm} 0;
`;

export default ContactLinks;
