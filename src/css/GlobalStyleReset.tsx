import { createGlobalStyle } from "styled-components";

/**
 * Standard Reset CSS for Email
 *
 * @link https://templates.mailchimp.com/development/css/reset-styles/
 */
const GlobalStyleReset = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  img {
    border: 0 none;
    height: auto;
    line-height: 100%;
    outline: none;
    text-decoration: none;
  }

  a img {
    border: 0 none;
  }

  .imageFix {
    display: block;
  }

  table,
  td {
    border-collapse: collapse;
  }

  #bodyTable {
    height: 100% !important;
    margin: 0;
    padding: 0;
    width: 100% !important;
  }
  
  /* Begin custom styles */
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

export { GlobalStyleReset };
