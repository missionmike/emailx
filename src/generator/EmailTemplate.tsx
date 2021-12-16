import React from "react";
import { renderToString } from "react-dom/server";

class EmailTemplate {
  getDoctype = () => {
    return '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">';
  };

  getHtmlHead = ({
    title = "",
    styleTags = "",
  }: {
    title?: string;
    styleTags?: string;
  }) => {
    return renderToString(
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: `
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
            
            ${this.stripHtml(styleTags)}
            `,
          }}
        />
      </head>
    );
  };

  getHtmlBody = ({ innerHtml = "" }: { innerHtml?: string }) => {
    return renderToString(
      <body dangerouslySetInnerHTML={{ __html: innerHtml }}></body>
    );
  };

  private stripHtml = (str) => {
    return str.replace(/(<([^>]+)>)/gi, "");
  };
}

export default EmailTemplate;
