import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import RouteShape from '../../prop-types/Route';
import { Button, Menu, Title } from './styles';

export class Header extends Component {
	static propTypes = {
		headerRoute: RouteShape,
		openIcon: FontAwesomeIcon.propTypes.icon,
		openTooltip: PropTypes.string,
		closeIcon: FontAwesomeIcon.propTypes.icon,
		closeTooltip: PropTypes.string,
		className: PropTypes.string,
		children: PropTypes.node
	};

	static defaultProps = {
		headerRoute: undefined,
		openIcon: faBars,
		openTooltip: 'Open Menu',
		closeIcon: faTimes,
		closeTooltip: 'Close Menu',
		className: '',
		children: undefined
	};

	state = {
		menuToggle: false
	};

	render() {
		const {
			headerRoute,
			openIcon,
			openTooltip,
			closeIcon,
			closeTooltip,
			className,
			children
		} = this.props;
		const { menuToggle } = this.state;

		return (
			<header className={className}>
				<If condition={headerRoute}>
					<Title href={headerRoute.href} title={headerRoute.label}>
						{headerRoute.label}
					</Title>
				</If>
				<Button
					onClick={() => this.setState({ menuToggle: !menuToggle })}
					title={menuToggle ? closeTooltip : openTooltip}
				>
					<FontAwesomeIcon icon={menuToggle ? closeIcon : openIcon} />
				</Button>
				<If condition={menuToggle}>
					<Menu>{children}</Menu>
				</If>
			</header>
		);
	}
}

export default Header;
