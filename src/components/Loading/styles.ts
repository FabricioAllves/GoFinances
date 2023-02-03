import styled from 'styled-components/native';
import theme from '../../global/styles/theme'

export const Container = styled.View`
flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
  color: '#5636D3',
}))`

`;