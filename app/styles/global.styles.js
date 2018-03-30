import { injectGlobal } from 'styled-components';
import { fontSizes, fontFamilies } from './theme.styles';

export default () => injectGlobal`
	html {
		font-size: ${fontSizes.base};
		font-family: ${fontFamilies.roboto};
		overflow: hidden;
	}

	html,
	body,
	#__next {
		height: 100%;
	}

	body {
		margin: 0;
	}

	/* fix for FOUC */
	.svg-inline--fa {
		display: inline-block;
		font-size: inherit;
		height: 1em;
		overflow: visible;
		vertical-align: -.125em;
	}
`;
