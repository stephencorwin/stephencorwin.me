import { injectGlobal } from 'styled-components';
import { fontSizes, fontFamilies } from './theme.styles';

export default () => injectGlobal`
	html {
		font-size: ${fontSizes.base};
		font-family: ${fontFamilies.roboto};
	}

	body {
		margin: 0;
	}
`;
