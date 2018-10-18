import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
  body {
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
    min-height:100vh;
    margin: 0;
	  padding: 0;
	  border: 0;
	  font-size: 100%;
	  font: inherit;
	  vertical-align: baseline;
	  font-family:'Roboto';
	  
	  -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${props =>
      props.noscroll &&
      `
        overflow:hidden;
      `}
    
  }
`;
