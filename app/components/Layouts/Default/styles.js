import styled from 'styled-components';
import { colors } from '../../../styles/theme.styles';

export const Default = Component => styled(Component)`
	background-color: ${({ invertBackground }) =>
		invertBackground ? colors.gray.light : colors.white};
`;

export default Default;
