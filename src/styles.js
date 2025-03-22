import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 0; }
`;

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;