import styled from 'styled-components';

export const Main = styled.main`
	padding: ${({ theme: { spacings } }) => spacings.sm};
`;
export const Page = Component => styled(Component)``;

export default Page;
