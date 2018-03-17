export const colors = {
	black: Object.assign(String('#000000'), {
		base: '#222222',
		light: '#4A4A4A',
		dark: '#000000',
		pure: '#000000'
	}),
	white: Object.assign(String('#FFFFFF'), {
		base: '#FFFFFF',
		light: '#EBEBEB',
		dark: '#CCCCCC',
		pure: '#FFFFFF'
	}),
	gray: Object.assign(String('#CCCCCC'), {
		base: '#CCCCCC',
		light: '#EBEBEB',
		dark: '#CCCCCC'
	}),
	blue: Object.assign(String('#1B365D'), {
		base: '#1B365D',
		light: '#2F486B',
		dark: '#193255'
	}),
	green: Object.assign(String('#4C7030'), {
		base: '#4C7030',
		light: '#5C7D42',
		dark: '#46662C'
	}),
	red: Object.assign(String('#D1031C'), {
		base: '#D1031C',
		light: '#D51930',
		dark: '#BE031A'
	}),
	yellow: Object.assign(String('#EAEA00'), {
		base: '#EAEA00',
		light: '#EBEB17',
		dark: '#D5D500'
	})
};

export const fontSizes = {
	base: '16px',
	xxs: '16px',
	xs: '18px',
	sm: '20px',
	md: '28px',
	lg: '34px',
	xl: '40px',
	xxl: '64px',
	xxxl: '84px'
};

export const fontWeights = {
	lightest: 100,
	light: 300,
	normal: 400,
	medium: 500,
	bold: 700,
	boldest: 800
};

export const fontFamilies = {
	roboto: 'Roboto, sans-serif',
	scorewin: 'ScoreWin, sans-serif'
};

export const spacings = {
	xxs: '5px',
	xs: '10px',
	sm: '20px',
	md: '30px',
	lg: '50px',
	xl: '80px',
	xxl: '100px'
};

export const breakpoints = {
	xs: Object.assign(String('0px'), {
		int: 0,
		px: '0px',
		em: '0em'
	}),
	sm: Object.assign(String('768px'), {
		int: 768,
		px: '768px',
		em: '48em'
	}),
	md: Object.assign(String('1024px'), {
		int: 1024,
		px: '1024px',
		em: '64em'
	}),
	lg: Object.assign(String('1200px'), {
		int: 1200,
		px: '1200px',
		em: '75em'
	})
};

export const shadows = {
	default: '0 2px 4px 0 rgba(0, 0, 0, 0.24), 0 0 4px 0 rgba(0, 0, 0, 0.12)',
	right: '2px 2px 4px 0 rgba(0, 0, 0, 0.24), 0 0 4px 0 rgba(0, 0, 0, 0.12)'
};

export default {
	colors,
	fontSizes,
	fontWeights,
	fontFamilies,
	spacings,
	breakpoints,
	shadows
};
