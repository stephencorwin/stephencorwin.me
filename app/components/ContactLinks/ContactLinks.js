import React from 'react';
import PropTypes from 'prop-types';

import A from '../A';
import TextOverflow from '../TextOverflow';
import ContactLinkShape from '../../prop-types/ContactLink';
import { Icon, Link, Links } from './styles';

export const ContactLinks = ({ links, className }) => (
	<section className={className}>
		<If condition={links.length}>
			<Links>
				<For each="link" of={links}>
					<Link key={link.href}>
						<A href={link.href} title={link.label} target="_blank">
							<TextOverflow>
								<Icon icon={link.icon} />
								{link.label}
							</TextOverflow>
						</A>
					</Link>
				</For>
			</Links>
		</If>
	</section>
);

ContactLinks.propTypes = {
	links: PropTypes.arrayOf(ContactLinkShape),
	className: PropTypes.string
};

ContactLinks.defaultProps = {
	links: [],
	className: ''
};

export default ContactLinks;
