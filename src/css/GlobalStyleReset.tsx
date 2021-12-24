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

  #outlook a {
    padding: 0;
  }
  /* Force Outlook to provide a "view in browser" menu link. */
  body {
      width: 100% !important;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      margin: 0;
      padding: 0;
  }
  /* Prevent Webkit and Windows Mobile platforms from changing default font sizes, while not breaking desktop design. */
  .ExternalClass {
      width: 100%;
  }
  /* Force Hotmail to display emails at full width */
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
      line-height: 100%;
  }
  /* Force Hotmail to display normal line spacing. More on that: http://www.emailonacid.com/forum/viewthread/43/ */
  #backgroundTable {
      margin: 0;
      padding: 0;
      width: 100% !important;
      line-height: 100% !important;
  }
  /* End reset */
`;

export { GlobalStyleReset };
