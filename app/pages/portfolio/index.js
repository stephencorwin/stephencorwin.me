import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PortfolioHolder from './holder';
import PortfolioItem from './item';

export class Portfolio extends Component {
	static getInitialProps({ query: { slug } }) {
		return { slug };
	}

	static propTypes = {
		slug: PropTypes.string,
		className: PropTypes.string
	};

	static defaultProps = {
		slug: undefined,
		className: ''
	};

	render() {
		const { slug, className } = this.props;
		return (
			<Choose>
				<When condition={slug}>
					<PortfolioItem slug={slug} className={className} />
				</When>
				<Otherwise>
					<PortfolioHolder className={className} />
				</Otherwise>
			</Choose>
		);
	}
}

export default Portfolio;
