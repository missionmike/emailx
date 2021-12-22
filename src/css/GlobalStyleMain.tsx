import { createGlobalStyle } from "styled-components";

/**
 * Standard Reset CSS for Email
 *
 * @link https://templates.mailchimp.com/development/css/reset-styles/
 */
const GlobalStyleMain = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.7rem;
  }
  
  p {
    margin: 0;
    padding: 1rem;
  }  
`;

export { GlobalStyleMain };
