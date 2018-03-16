import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
	html {
		font-size: 16px;
		font-family: roboto;
	}

	body {
		margin: 0;
	}
`;
